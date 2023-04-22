function getPlayScreen() {
  console.log('getPlayScreen');
  class PlayScreen extends me.Stage {
    constructor() {
      super();
    }
    onResetEvent() {
      const platformImage = me.loader.getImage('./images/platform2.png');
      drawPlatform(me.game, 100, 400, 200, 50, platformImage);
    }
    onDestroyEvent() {}
  }
  return PlayScreen;
}