async function main() {
  console.log('main');
  const me = await import("https://cdn.jsdelivr.net/npm/melonjs@latest/dist/melonjs.module.js");
  me.device.onReady(() => {
    if (!me.video.init(1218, 562, {
      parent: "screen",
      scale: "auto"
    })) {
      alert("Your browser does not support HTML5 canvas.");
      return;
    }
    me.game.world.addChild(new me.ColorLayer("background", "#202020"));
    const PlayerEntity = getPlayerEntity(me);
    const player = new PlayerEntity(0, 0);
    me.game.world.addChild(player);
    setupKeyboardInput(me, player);
  });
}