function handleInput(player, keys) {
  if (keys.ArrowUp && !player.jumping) {
    player.jumping = true;
    player.jumpSpeed = -player.speed * 2;
  }
  if (keys.ArrowLeft) {
    player.x -= player.speed;
  }
  if (keys.ArrowRight) {
    player.x += player.speed;
  }
}