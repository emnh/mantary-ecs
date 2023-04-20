import { configureStore, createSlice } from '@reduxjs/toolkit';
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

const ecsSlice = createSlice({
  name: 'ecs',
  initialState: vector(),
  reducers: {
    updatePositions: (state) => {
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
    },
  },
});

const store = configureStore({
  reducer: ecsSlice.reducer,
});

// Example Usage

const position = defineComponent('position', hashMap('x', 0, 'y', 0));
const velocity = defineComponent('velocity', hashMap('x', 0, 'y', 0));

let entity = createEntity();
entity = addComponent(entity, position, hashMap('x', 0, 'y', 0));
entity = addComponent(entity, velocity, hashMap('x', 1, 'y', 2));

store.dispatch(ecsSlice.actions.updatePositions());

console.log(store.getState().toJS());
