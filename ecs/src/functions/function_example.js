function example() {
  const canvas = document.getElementById("screen");
  me.init(canvas.width, canvas.height, {
    renderer: me.video.CANVAS,
    wrapper: "screen",
    scale: "auto",
    ...me.game.HIDPI
  });
  setupKeyboardInput();
  me.game.world.addChild(new (getPlayerEntity())(me.game.viewport.width / 2, me.game.viewport.height / 2));
  me.state.change(me.state.PLAY);
}