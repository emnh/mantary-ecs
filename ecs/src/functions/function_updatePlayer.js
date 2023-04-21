function updatePlayer(player, platforms, delta) {
  console.log('updatePlayer');
  player.velocityY += 0.5 * delta;
  player.y += player.velocityY * delta;
  if (player.y + player.height > canvas.height) {
    console.log('Oh no!');
    player.y = canvas.height - player.height;
    player.velocityY = 0;
  }
  platforms.forEach(platform => {
    if (player.x < platform.x + platform.width && player.x + player.width > platform.x && player.y + player.height > platform.y && player.y < platform.y + platform.height) {
      player.y = platform.y - player.height;
      player.velocityY = 0;
    }
  });
  return player;
}