function deviceOnReady() {
  if (('debug' in window) && window.debug) console.log('deviceOnReady');
  if (!me.video.init(3840, 2160, {
    parent: "app",
    scaleMethod: "flex-width",
    renderer: me.video.AUTO,
    preferWebGL1: false,
    subPixel: true,
    antiAlias: true
  })) {
    alert("Your browser does not support HTML5 canvas.");
    return;
  }
  const makeAnyEntity = getAnyEntity();
  addLevel(makeAnyEntity, me.game.world);
  addPlayer(makeAnyEntity, me.game.world);
}
