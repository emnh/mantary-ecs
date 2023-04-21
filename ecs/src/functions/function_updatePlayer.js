function updatePlayer(player, platforms) {
  // Apply gravity to the player
  player.y += player.jumpSpeed;
  player.jumpSpeed += player.gravity;

  // Check for collision with the platforms
  for (let i = 0; i < platforms.length; i++) {
    const platform = platforms[i];
    if (
      player.x + player.width > platform.x &&
      player.x < platform.x + platform.width &&
      player.y + player.height > platform.y &&
      player.y < platform.y + platform.height
    ) {
      // Collision detected
      if (player.jumpSpeed > 0 && player.y + player.height - platform.y < player.jumpSpeed) {
        player.y = platform.y - player.height;
        player.jumping = false;
        player.jumpSpeed = 0;
      } else if (player.jumpSpeed < 0 && platform.y + platform.height - player.y < -player.jumpSpeed) {
        player.y = platform.y + platform.height;
        player.jumpSpeed = 0;
      }
    }
  }

  // Check if the player has fallen off the screen
  if (player.y > canvas.height) {
    alert("Oh no! You fell off the screen.");
    location.reload();
  }
}