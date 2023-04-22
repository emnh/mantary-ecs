function setupKeyboardInput() {
  me.input.bindKey(me.input.KEY.LEFT, "left");
  me.input.bindKey(me.input.KEY.RIGHT, "right");
  me.input.bindKey(me.input.KEY.UP, "up");
  me.input.bindKey(me.input.KEY.DOWN, "down");
  me.input.bindKey(me.input.KEY.W, "w");
  me.input.bindKey(me.input.KEY.A, "a");
  me.input.bindKey(me.input.KEY.S, "s");
  me.input.bindKey(me.input.KEY.D, "d");
  me.input.bindKey(me.input.KEY.SPACE, "space");
  me.input.bindPointer(me.input.KEY.LEFT);
  me.input.bindPointer(me.input.KEY.RIGHT);
  me.input.bindPointer(me.input.KEY.UP);
  me.input.bindPointer(me.input.KEY.DOWN);
}