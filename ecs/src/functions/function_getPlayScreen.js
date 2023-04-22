function getPlayScreen(images) {
  class PlayScreen extends me.Stage {
    constructor() {
      super();
    }
    onResetEvent() {
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
      drawPlatform(me.game, 100, 400, 200, 50, platformImage);
      drawPlayer(me.game, 100, 300, 50, 50, playerImage);
    }
    onDestroyEvent() {}
  }
  return PlayScreen;
}