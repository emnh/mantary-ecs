function getPlayScreen(images) {
  console.log('getPlayScreen');
  class PlayScreen extends me.Stage {
    constructor() {
      super();
      this.backgroundColor = '#202020';
      drawPlatform(this, 0, 500, 800, 100, images.platform);
      drawPlayer(this, 0, 0, 64, 64, images.player);
    }
    onResetEvent() {
      const {world} = me.game;
      world.addChild(this);
      const {PlayScreen} = me.state;
      PlayScreen.player = new me.PlayerEntity(0, 0, {});
      PlayScreen.player.renderable.scale(2, 2);
      PlayScreen.player.body.gravityScale = 0;
      PlayScreen.player.body.collisionType = me.collision.types.PLAYER_OBJECT;
      PlayScreen.player.body.setVelocity(3, 3);
      PlayScreen.player.body.setMaxVelocity(3, 3);
      drawPlatform(world, 0, 500, 800, 100, images.platform);
      me.input.bindKey(me.input.KEY.LEFT, "left");
      me.input.bindKey(me.input.KEY.RIGHT, "right");
      me.input.bindKey(me.input.KEY.UP, "jump", true);
      me.input.bindKey(me.input.KEY.SPACE, "shoot");
      me.game.viewport.follow(PlayScreen.player.pos, me.game.viewport.AXIS.BOTH);
      me.game.viewport.setDeadzone(30, 30);
    }
  }
  return PlayScreen;
}