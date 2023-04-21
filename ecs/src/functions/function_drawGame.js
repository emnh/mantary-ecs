function drawGame(ctx, platforms, player) {
  console.log('drawGame');
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = '#555555';
  for (let i = 0; i < platforms.length; i++) {
    const platform = platforms[i];
    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
  }
  ctx.fillStyle = '#ff0000';
  ctx.fillRect(player.x, player.y, player.width, player.height);
}