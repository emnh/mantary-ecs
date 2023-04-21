function main() {
  console.log('main');
  var canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 480;
  document.body.appendChild(canvas);
  me.boot();
  me.video.init(canvas.width, canvas.height, {
    wrapper: canvas,
    renderer: me.video.CANVAS,
    scale: "auto",
    scaleMethod: "fit",
    doubleBuffering: true
  });
  me.loader.preload([], function onLoad() {
    me.state.change("play");
    me.game.repaint();
  });
}