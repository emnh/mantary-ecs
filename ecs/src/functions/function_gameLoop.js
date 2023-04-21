function gameLoop() {
  console.log('gameLoop');
  lastTimestamp = drawGame(ctx, platforms, player, lastTimestamp);
  requestAnimationFrame(gameLoop);
}