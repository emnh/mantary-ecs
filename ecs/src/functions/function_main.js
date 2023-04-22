async function main() {
  const me = await import("https://esm.run/melonjs");
  me.boot();
  me.video.init(1218, 562, {
    parent: "screen",
    scale: "auto",
    renderer: me.video.RENDERER_WEBGL
  });
  const PlayerEntity = getPlayerEntity(me);
  const player = new PlayerEntity(100, 100);
  setupKeyboardInput(me, player);
  me.game.world.addChild(player);
  me.state.change(me.state.PLAY);
}