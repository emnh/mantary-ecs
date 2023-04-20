# mantary-ecs

# Features
 - 2d game engine on top of melonjs
 - Entity Component System
 - Function generation using chatgpt
 - Immutability using mori
 - Context extraction for chatgpt
 - Pure functions
 - Dependency diagram and injection
 - Tiered function buckets with dependencies only pointing to lower tiers

# Discussion

Mantary Entity Component System: A 2d javascript game engine

We are going to be based on the MelonJS game engine and probably ecsy for components.
We do have one special requirement for our game, and that is that every function
should be more or less reproducible by pasting a textual description of it into
chatgpt and taking its output back into the function. So for every function
we need to extract its context for copy-pasting into chatgpt.

One way is to explicitly list all dependencies in all functions and let them be pure.
Let's look at a contrived example, where mulAdd depends on functions mul and add.
If mulAdd takes mul and add as parameters, then if we have a deeply nested tree
of functions we will have parameter lists that are too long.  If we instead
import the functions at the top of the file, then we can use them without
exploding the parameter list.

There are a few problems with this approach. It's harder to list the context
of the top level functions. Or is it? We can just list all the function signatures,
problem solved no? And hope that the scope of our project fits its function
signatures within the chatgpt context.

Ok so let's import function dependencies at the top of the file.
Now on to making mutable functions immutable.
Here is a funcion that takes a position and velocity component
and updates the position component.

```js
    function updatePosition(position, velocity) {
        position.x += velocity.x;
        position.y += velocity.y;
    }
```
How would I write this state altering function using redux, mori and ecsy?

```js
const { hashMap, updateIn } = require('mori');

// Define initial state
const initialState = hashMap(
  'position', hashMap('x', 0, 'y', 0),
  'velocity', hashMap('x', 0, 'y', 0)
);

// Define reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_POSITION':
      // Update the position in the state using Mori's `updateIn` function
      return updateIn(state, ['position', 'x'], x => x + state.getIn(['velocity', 'x']))
             .updateIn(['position', 'y'], y => y + state.getIn(['velocity', 'y']));
    default:
      return state;
  }
}

// Create store using the reducer function
const store = createStore(reducer);

// Dispatch an action to update the position
store.dispatch({ type: 'UPDATE_POSITION' });
```