function initializeMelonJS(callback) {
  console.log('initializeMelonJS');
  me.video.init(640, 480, {
    parent: 'game-container',
    renderer: me.video.CANVAS,
    scale: 'auto',
    scaleMethod: 'fit'
  });
  const game = new me.Container();
  me.game.world.addChild(game);
  const PlayScreen = getPlayScreen();
  me.state.set(me.state.PLAY, new PlayScreen());
  me.state.change(me.state.PLAY);
  callback(game);
}