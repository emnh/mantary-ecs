function main() {
  console.log('main');
  me.video.init(640, 480, {
    wrapper: "screen",
    renderer: me.video.CANVAS,
    scale: "auto",
    scaleMethod: "fit",
    doubleBuffering: true
  });
  me.loader.preload([], function () {
    me.state.add("play", new PlayState());
    me.state.change("play");
    me.game.repaint();
  });
}