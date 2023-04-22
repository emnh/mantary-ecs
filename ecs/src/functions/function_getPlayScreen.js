async function getPlayScreen() {
  class PlayScreen extends me.Stage {
    constructor() {
      super();
    }
    async onResetEvent() {
      const platformImage = await getImage('/images/platform2');
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