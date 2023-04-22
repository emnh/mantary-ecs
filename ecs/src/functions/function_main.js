function main() {
  console.log('main');
  const me = window.me;
  me.device.onReady(function () {
    if (!me.video.init(1218, 562, {
      parent: "screen",
      scale: "auto"
    })) {
      alert("Your browser does not support HTML5 canvas.");
      return;
    }
    me.game.world.addChild(new me.ColorLayer("background", "#202020"));
    me.game.world.addChild(new me.Text(609, 281, {
      font: "Arial",
      size: 160,
      fillStyle: "#FFFFFF",
      textBaseline: "middle",
      textAlign: "center",
      text: "Hello World !"
    }));
  });
}