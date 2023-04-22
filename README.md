# mantary-ecs

# 3 things to do

```powershell
cd ecs/src
python ..\..\apptyapp-chatgpt\server.py
```

```powershell	
cd ecs
npm run dev
```

```powershell
cd ecs
npm run signature
```

# Features
 - 2d game engine on top of melonjs
 - Entity Component System
 - Pure functions
 - Tiered function buckets with dependencies only pointing to lower tiers
 - Immutability using mori
 - Dependency diagram and injection
 - Functions should be either pure, idempotent with side effects or using entity system for state

# Notes on requestAnimationFrame

http://www.javascriptkit.com/javatutors/requestanimationframe.shtml
https://gamedev.stackexchange.com/questions/1589/when-should-i-use-a-fixed-or-variable-time-step

Always call requestAnimationFrame, even in a physics update function.
If we need to slow down the update frequency,
we can call requestAnimationFrame from within setTimeout or setInterval,
or perhaps better to check the time elapsed within requestAnimationFrame
and then call our physics update.

So we're sticking with interpolation, because of perfectionism.
It would likely work great without it, but we want to have super smooth animations on
high refresh rate monitors by interpolation, plus we want deterministic physics updates as
recommended by major game engines like Unity and physics engines like Box2D,
plus we want to be able to slow down the game, which is achieved by running the physics update
step supplying a a different time constant than the interval it's actually running at.

So we need to find out what's the story with requestAnimationFrame in melonjs.
How do we synchronize with melonjs?

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


# Example code

I want to build some js code around a platformer game.
Let's first define an example code that we can work with.
The example code should draw a rectangle on screen using melonjs,
update state using setInterval(physicsUpdate, 10)
and linearly interpolate between two states on requestAnimationFrame.
The rectangle should move using wasd.

We are going store the state in entity component system style.
The state is a global hashMap of components.
The components are also hashMaps.
The components are going to be updated by the physicsUpdate function.
The physicsUpdate function is going to be called by setInterval.
The physicsUpdate function is going to update the state.
The state is going to be used by the render function.
The render function is going to be called by requestAnimationFrame.
The render function is going to draw the rectangle on screen.
