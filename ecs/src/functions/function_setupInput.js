function setupInput() {
  console.log('setupInput');
  me.input.bindKey(me.input.KEY.LEFT, "left");
  me.input.bindKey(me.input.KEY.RIGHT, "right");
  me.input.bindKey(me.input.KEY.X, "jump", true);
  me.input.bindKey(me.input.KEY.UP, "jump", true);
  me.input.bindKey(me.input.KEY.SPACE, "jump", true);
  me.input.bindKey(me.input.KEY.DOWN, "down");
}
