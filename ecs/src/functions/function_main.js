function main() {
  console.log('main');
  me.video.init(640, 480, {
    wrapper: "screen",
    renderer: me.video.CANVAS,
    scale: "auto"
  });
  me.state.PLAY = me.state.extend({
    onResetEvent: function () {
      var player = new Player(0, 0);
      me.game.world.addChild(player);
      var platform1 = new Platform(0, 400);
      me.game.world.addChild(platform1);
      var platform2 = new Platform(200, 300);
      me.game.world.addChild(platform2);
      var platform3 = new Platform(400, 200);
      me.game.world.addChild(platform3);
    }
  });
  me.device.onReady(function () {
    me.state.change(me.state.PLAY);
    me.input.bindKey(me.input.KEY.LEFT, "left");
    me.input.bindKey(me.input.KEY.RIGHT, "right");
    me.input.bindKey(me.input.KEY.UP, "jump");
    me.game.viewport.follow(me.game.world.getChildByName("player")[0], me.game.viewport.AXIS.BOTH);
    me.game.start();
  });
}