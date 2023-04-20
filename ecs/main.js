import './style.css'

import mori from 'mori';

let entityIdCounter = 0;
let entitiesById = mori.hashMap();
let entitiesByComponent = mori.hashMap();

// We could have an integer type counter,
// but we want to maintain backwards compatibility in the saved data format,
// so better use a string. Yeah we could have an integer for runtime and string for saved data,
// but why bother, they are both fast enough.

const constants = {
  COMPONENT_TYPE_SPRITE: 'sprite',
  COMPONENT_TYPE_POSITION: 'position',
  COMPONENT_TYPE_VELOCITY: 'velocity',
  COMPONENT_TYPE_COLLIDER: 'collider',
  COMPONENT_TYPE_HEALTH: 'health',
  COMPONENT_TYPE_AI: 'ai',
  COMPONENT_TYPE_PLAYER: 'player',
  COMPONENT_TYPE_INPUT: 'input',
};

function addEntity() {
  const id = entityIdCounter;
  entityIdCounter++;
  console.log(id);
  entitiesById = mori.assoc(entitiesById, id, mori.hashMap());
  return id;
}

const id = addEntity();

function RectComponent(x, y, width, height) {
  return mori.hashMap('x', x, 'y', y, 'width', width, 'height', height);
}

function addComponent(entityId, component) {
  // Check that the entity exists
  if (!mori.hasKey(entitiesById, entityId)) {
    throw new Error(`Entity ${entityId} does not exist`);
  }
  entitiesById = mori.updateIn(entitiesById, [entityId], mori.merge, component);
  entitiesByComponent = mori.updateIn(entitiesByComponent, [mori.get(component, "type")], mori.conj, entityId);
}

const playerEntityId = addEntity();
const component = mori.hashMap({ type: constants.COMPONENT_TYPE_SPRITE, x: 10, y: 20 });
addComponent(playerEntityId, component);

console.log(mori.toJs(entitiesById)); // Output: { "player": { "type": "sprite", "x": 10, "y": 20 } }
console.log(mori.toJs(entitiesByComponent)); // Output: { "type": ["player"] }