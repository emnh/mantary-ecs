function getPlayScreen(images) {
  class PlayScreen extends me.Stage {
    constructor() {
      super();
      this.container = null;
    }
    onResetEvent() {
      this.container = new me.Container();
      me.game.world.addChild(this.container);
      const platformImage = images['platform2.png'];
      if (!platformImage) {
        console.error("Failed to load platform image!");
        return;
      }
      const playerImage = images['walk.gif'];
      if (!playerImage) {
        console.error("Failed to load player image!");
        return;
      }
      drawPlatform(this.container, 100, 400, 200, 50, platformImage);
      drawPlayer(this.container, 100, 300, 50, 50, playerImage);
    }
    onDestroyEvent() {
      if (this.container) {
        me.game.world.removeChild(this.container);
        this.container = null;
      }
    }
  }
  return PlayScreen;
}