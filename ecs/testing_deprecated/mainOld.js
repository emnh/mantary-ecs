import './style.css'

import mori from 'mori';
// We are going to use mori for immutable data structures.
// Everything is packed into a state dictionary.
// Functions could take state and reutrn a modified state,
// but then we couldn't add security and permissions to the state.
// So we are going to return a list of modifications to the state instead.
// Let's base the modifications on CRUD: create, read, update, delete.

// Write a function getNextState that takes a state and a modification function,
// and returns a new state based on the modifications returned from the function.
// The permissions are path globs for the state along with the specific permission.
// How do we describe the accessor? Is it a function name or a secret key?
// We can't really prevent reads if we pass around the whole state,
// but we are not too concerned about that.

// What if instead of passing around the whole state,
// we pass around a set of functions that read or patch the state?

// Come on, I'm the only one who is going to work on this project,
// I don't need to worry about permissions.

What do you think about this approach? Is it a tenable approach? Is it too complicated?

const constants = mori.hashMap(
  // We could have an integer type counter,
  // but we want to maintain backwards compatibility in the saved data format,
  // so better use a string. Yeah we could have an integer for runtime and string for saved data,
  // but why bother, they are both fast enough.
  'PLAYER_ID_PREFIX', 'player',
  'COMPONENT_TYPE_SPRITE', 'sprite',
  'COMPONENT_TYPE_POSITION', 'position',
  'COMPONENT_TYPE_VELOCITY', 'velocity',
  'COMPONENT_TYPE_COLLIDER', 'collider',
  'COMPONENT_TYPE_HEALTH', 'health',
  'COMPONENT_TYPE_AI', 'ai',
  'COMPONENT_TYPE_PLAYER', 'player',
  'COMPONENT_TYPE_INPUT', 'input'
);

let state =
  mori.hashMap(
    "constants", constants,
    "entityIdCounter", 0,
    "entitiesById", mori.hashMap(),
    "entitiesByComponent", mori.hashMap(),
    "permissions", mori.hashMap());

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
  const serializedComponent = mori.assoc(component, '_serialize', getOrDefault(component, '_serialize', false));
  entitiesById = mori.updateIn(entitiesById, [entityId], mori.merge, serializedComponent);
  entitiesByComponent = mori.updateIn(entitiesByComponent, [mori.get(serializedComponent, "type")], mori.conj, entityId);
}

function testComponent() {
  const playerEntityId = addEntity(constants.PLAYER_ID_PREFIX);
  const component = mori.hashMap('type', constants.COMPONENT_TYPE_SPRITE, 'x', 10, 'y', 20);
  addComponent(playerEntityId, component);  
  console.log(mori.toJs(entitiesById));
  console.log(mori.toJs(entitiesByComponent));
}

function RectComponent(x, y, width, height) {
  return mori.hashMap('x', x, 'y', y, 'width', width, 'height', height);
}

testComponent();

