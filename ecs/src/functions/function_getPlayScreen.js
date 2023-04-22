function getPlayScreen(images) {
  console.log('getPlayScreen');
  class PlayScreen extends me.Stage {
    constructor() {
      super();
    }
    onResetEvent() {
      const platformImage = images['/images/platform2.png'];
      if (!platformImage) {
        console.error("Failed to load platform image!");
        return;
      }
      drawPlatform(me.game, 100, 400, 200, 50, platformImage);
    }
    onDestroyEvent() {}
  }
  return PlayScreen;
}