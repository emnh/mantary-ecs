import mori from 'mori';
import * as me from "melonjs";

// Define components
const PositionComponent = me.Component.extend({
  init(x, y) {
    this._super(me.Component, 'init', [x, y]);
    this.x = x;
    this.y = y;
  },
});

const VelocityComponent = me.Component.extend({
  init(vx, vy) {
    this._super(me.Component, 'init', [vx, vy]);
    this.vx = vx;
    this.vy = vy;
  },
});

const RenderComponent = me.Renderable.extend({
  init(w, h, color) {
    this._super(me.Renderable, 'init', [0, 0, w, h]);
    this.color = color;
    this.anchorPoint.set(0, 0);
  },

  draw(renderer) {
    renderer.setColor(this.color);
    renderer.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  },
});

// Define systems
const MovementSystem = me.System.extend({
  update(dt) {
    this.queries.entities.results.forEach(entity => {
      const position = entity.getComponent('position');
      const velocity = entity.getComponent('velocity');
      const dx = velocity.vx * dt / 1000;
      const dy = velocity.vy * dt / 1000;
      this.store.dispatch({ type: 'MOVE_ENTITY', payload: { entity, dx, dy } });
    });
  },
});
MovementSystem.queries = {
  entities: {
    components: ['position', 'velocity'],
  },
};

const RenderSystem = me.System.extend({
  update(dt) {
    this.queries.entities.results.forEach(entity => {
      const position = entity.getComponent('position');
      const render = entity.getComponent('render');
      render.pos.set(position.x, position.y);
    });
  },
});
RenderSystem.queries = {
  entities: {
    components: ['position', 'render'],
  },
};

// Define initial state
const initialState = mori.hashMap('entities', mori.hashMap());

// Define action types and creators
const ADD_ENTITY = 'ADD_ENTITY';
const MOVE_ENTITY = 'MOVE_ENTITY';
const NOOP = 'NOOP';

function addEntity(entity) {
  return {
    type: ADD_ENTITY,
    payload: { entity },
  };
}

function moveEntity(entity, dx, dy) {
  return {
    type: MOVE_ENTITY,
    payload: { entity, dx, dy },
  };
}

function noop() {
  return {
    type: NOOP,
  };
}

// Define reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ENTITY:
      return mori.assocIn(state, ['entities', action.payload.entity.id], mori.toClj(action.payload.entity));
    case MOVE_ENTITY:
      const { entity, dx, dy } = action.payload;
      const position = entity.getComponent('position');
      const nextPosition = mori.assoc(position, 'x', position.x + dx, 'y', position.y + dy);
      return mori.assocIn(state, ['entities', entity.id, 'position'], nextPosition);
    case NOOP:
      return state;
    default:
      return state;
  }
}

// Create game instance
const game = new me.Game({
  renderer: me.WebGLRenderer,
  canvas: document.getElementById('game'),
});

// Define update function
function update(dt) {
  const state = game.data.state;
  const nextState = reducer(state, noop());
  game.data.state = nextState;
}

// Create store and register it with the game
const store = Redux.createStore(reducer, initialState, mori.toClj);
