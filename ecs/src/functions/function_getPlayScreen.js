function getPlayScreen() {
  console.log('getPlayScreen');
  class PlayScreen extends me.Stage {
    constructor() {
      super();
    }
    onResetEvent() {
      drawRectangle(me.game, 100, 100, 50, 50, '#FF0000');
    }
    onDestroyEvent() {}
  }
  return PlayScreen;
}