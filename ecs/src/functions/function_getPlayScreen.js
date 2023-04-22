function getPlayScreen(images) {
  console.log('getPlayScreen');
  const PlayerEntity = getPlayerEntity();
  class PlayScreen extends me.Stage {
    constructor() {
      super();
      this.backgroundColor = '#202020';
      drawPlatform(me.game.world, 0, 500, 800, 100, images.platform);
      const player = new PlayerEntity(0, 0, {
        image: images.player,
        width: 64,
        height: 64
      });
      player.renderable.scale(2, 2);
      player.body.gravityScale = 0;
      player.body.collisionType = me.collision.types.PLAYER_OBJECT;
      player.body.vel.x = 3;
      player.body.vel.y = 3;
      me.game.world.addChild(player);
    }
    onResetEvent() {
      const {PlayScreen} = me.state;
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