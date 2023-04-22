function initializeMelonJS() {
  console.log('initializeMelonJS');
  game = new me.Game({
    renderer: me.CanvasRenderer,
    width: 640,
    height: 480,
    parent: 'game-container',
    title: 'My MelonJS Game'
  });
  game.start();
}