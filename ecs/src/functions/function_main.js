function main() {
  console.log('main');
  var canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 480;
  document.body.appendChild(canvas);
  var game = new melonjs.Game({
    canvas: canvas,
    resources: [],
    states: []
  });
  game.onload = function () {
    me.state.change("play");
  };
  game.start();
}