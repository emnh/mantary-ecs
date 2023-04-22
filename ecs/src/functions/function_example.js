function example() {
  console.log('example');
  if (!window.melonjs) {
    console.error("melonjs is not properly loaded.");
    return;
  }
  const melonjs = window.melonjs;
  melonjs.device.onReady(function () {
    if (!melonjs.video.init(1218, 562, {
      parent: "screen",
      scale: "auto"
    })) {
      alert("Your browser does not support HTML5 canvas.");
      return;
    }
    melonjs.game.world.addChild(new melonjs.ColorLayer("background", "#202020"));
    melonjs.game.world.addChild(new melonjs.Text(609, 281, {
      font: "Arial",
      size: 160,
      fillStyle: "#FFFFFF",
      textBaseline: "middle",
      textAlign: "center",
      text: "Hello World !"
    }));
  });
}