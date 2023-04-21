function handleInput(player, keys) {
  if (keys["ArrowLeft"]) {
    player.x -= player.speed;
  }
  if (keys["ArrowRight"]) {
    player.x += player.speed;
  }
  if (keys["ArrowUp"]) {
    if (!player.jumping) {
      player.jumping = true;
      player.jumpSpeed = -player.jumpHeight;
    }
  }
}