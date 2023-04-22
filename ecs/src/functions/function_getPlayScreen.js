function getPlayScreen() {
  console.log('getPlayScreen');
  class PlayScreen extends me.Stage {
    constructor() {
      super();
    }
    onResetEvent() {
      const platformImage = me.loader.getImage('/public/images/platform2');
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