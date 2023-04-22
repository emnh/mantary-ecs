function getPlayScreen() {
  console.log('getPlayScreen');
  class PlayScreen extends me.Stage {
    constructor() {
      super();
    }
    onResetEvent() {
      let platformImage = me.loader.getImage('../images/platform2.png');
      if (!platformImage) {
        platformImage = me.loader.getImage('/images/platform2.png');
      }
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