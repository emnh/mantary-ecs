function main() {
  console.log('main');
  me.initialize();
  me.loader.load({}, function () {
    me.state.change(me.state.PLAY);
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
  me.start();
}