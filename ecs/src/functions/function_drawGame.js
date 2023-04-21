function drawGame(ctx, platforms, player, lastTimestamp) {
  console.log('drawGame');
  const timestamp = performance.now();
  const elapsed = (timestamp - lastTimestamp) / 1000;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  player.velocityY += 0.5 * elapsed;
  player.y += player.velocityY * elapsed;
  for (let i = 0; i < platforms.length; i++) {
    const platform = platforms[i];
    if (player.y + player.height > platform.y && player.y < platform.y + platform.height && player.x + player.width > platform.x && player.x < platform.x + platform.width) {
      player.y = platform.y - player.height;
      player.velocityY = 0;
      break;
    }
  }
  ctx.fillStyle = '#555555';
  for (let i = 0; i < platforms.length; i++) {
    const platform = platforms[i];
    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
  }
  ctx.fillStyle = '#ff0000';
  ctx.fillRect(player.x, player.y, player.width, player.height);
  return timestamp;
}