function example(me) {
  me.boot();
  me.device.onReady(function () {
    if (!me.video.init(1218, 562, {
      parent: "screen",
      scale: "auto"
    })) {
      alert("Your browser does not support HTML5 canvas.");
      return;
    }
    me.game.world.addChild(new me.ColorLayer("background", "#202020"));
    const PlayerEntity = getPlayerEntity(me);
    me.game.world.addChild(new PlayerEntity(100, 100, {
      width: 32,
      height: 64,
      image: me.loader.getImage("player")
    }));
    me.game.world.addChild(new me.Text(609, 281, {
      font: "Arial",
      size: 160,
      fillStyle: "#FFFFFF",
      textBaseline: "middle",
      textAlign: "center",
      text: "Hello World !"
    }));
    setupKeyboardInput(me);
  });
}