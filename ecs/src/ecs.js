import { createStore } from 'redux';
import {
  hashMap, vector, assoc, dissoc, conj, filter, get, update, getIn
} from 'mori';

// Entities

function createEntity() {
  return hashMap();
}

function addComponent(entity, componentType, componentData) {
  return assoc(entity, componentType, componentData);
}

function removeComponent(entity, componentType) {
  return dissoc(entity, componentType);
}

function getComponent(entity, componentType) {
  return get(entity, componentType);
}

function hasComponent(entity, componentType) {
  return get(entity, componentType) !== undefined;
}

// Components

function defineComponent(componentName, initialData) {
  return componentName;
}

// Systems

function defineSystem(systemName, requiredComponents, systemFunction) {
  return { systemName, requiredComponents, systemFunction };
}

function runSystem(systemType, entities) {
  const filteredEntities = filterEntitiesByComponents(entities, systemType.requiredComponents);
  return systemType.systemFunction(filteredEntities);
}

// Helpers

function filterEntitiesByComponents(entities, componentTypes) {
  return filter(entity => {
    return componentTypes.every(componentType => hasComponent(entity, componentType));
  }, entities);
}

// Redux

const UPDATE_POSITIONS = 'UPDATE_POSITIONS';

function reducer(state = vector(), action) {
  switch (action.type) {
    case UPDATE_POSITIONS:
      const movementSystem = defineSystem('movement', ['position', 'velocity'], entities => {
        return entities.map(entity => {
          const position = getComponent(entity, 'position');
          const velocity = getComponent(entity, 'velocity');
          const newPosition = hashMap(
            'x', get(position, 'x') + get(velocity, 'x'),
            'y', get(position, 'y') + get(velocity, 'y')
          );
          return addComponent(entity, 'position', newPosition);
        });
      });

      return runSystem(movementSystem, state);
    default:
      return state;
  }
}

const store = createStore(reducer);

// Example Usage

const position = defineComponent('position', hashMap('x', 0, 'y', 0));
const velocity = defineComponent('velocity', hashMap('x', 0, 'y', 0));

let entity = createEntity();
entity = addComponent(entity, position, hashMap('x', 0, 'y', 0));
entity = addComponent(entity, velocity, hashMap('x', 1, 'y', 2));

store.dispatch({ type: 'INIT' }); // Add initial state to Redux store
store.dispatch({ type: UPDATE_POSITIONS });

console.log(store.getState().toJS());
