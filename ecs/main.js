import './style.css'

import mori from 'mori';

let state = mori.hashMap();
let entityIdCounter = 0;
let entitiesById = mori.hashMap();
let entitiesByComponent = mori.hashMap();

// We could have an integer type counter,
// but we want to maintain backwards compatibility in the saved data format,
// so better use a string. Yeah we could have an integer for runtime and string for saved data,
// but why bother, they are both fast enough.

const constants = {
  PLAYER_ID_PREFIX: 'player',
  COMPONENT_TYPE_SPRITE: 'sprite',
  COMPONENT_TYPE_POSITION: 'position',
  COMPONENT_TYPE_VELOCITY: 'velocity',
  COMPONENT_TYPE_COLLIDER: 'collider',
  COMPONENT_TYPE_HEALTH: 'health',
  COMPONENT_TYPE_AI: 'ai',
  COMPONENT_TYPE_PLAYER: 'player',
  COMPONENT_TYPE_INPUT: 'input',
};

function getOrDefault(map, key, defaultValue) {
  const value = mori.get(map, key);
  return value !== null && value !== undefined ? value : defaultValue;
}

function addEntity(prefix) {
  const id = prefix + entityIdCounter;
  entityIdCounter++;
  // console.log(id);
  entitiesById = mori.assoc(entitiesById, id, mori.hashMap());
  return id;
}

function addComponent(entityId, component) {
  // Check that the entity exists
  if (!mori.hasKey(entitiesById, entityId)) {
    throw new Error(`Entity ${entityId} does not exist`);
  }
  entitiesById = mori.updateIn(entitiesById, [entityId], mori.merge, component);
  entitiesByComponent = mori.updateIn(entitiesByComponent, [mori.get(component, "type")], mori.conj, entityId);
}

function testComponent() {
  const playerEntityId = addEntity(constants.PLAYER_ID_PREFIX);
  const component = mori.hashMap('type', constants.COMPONENT_TYPE_SPRITE, 'x', 10, 'y', 20);
  addComponent(playerEntityId, component);
}

function RectComponent(x, y, width, height) {
  return mori.hashMap('x', x, 'y', y, 'width', width, 'height', height);
}

console.log(mori.toJs(entitiesById));
console.log(mori.toJs(entitiesByComponent));