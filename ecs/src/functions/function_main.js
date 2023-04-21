function main() {
  // Set the background color to green
  document.body.style.backgroundColor = "green";

  // Create the game canvas element
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 600;
  canvas.style.border = "1px solid black";
  canvas.style.margin = "0 auto"; // Center the canvas horizontally
  document.body.appendChild(canvas);

  // Create the game context object
  const ctx = canvas.getContext("2d");

  // Create the player object
  const player = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    speed: 5,
    color: "blue"
  };

  // Define the game loop function
  function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move the player
    if (keys.ArrowUp) {
      player.y -= player.speed;
    }
    if (keys.ArrowDown) {
      player.y += player.speed;
    }
    if (keys.ArrowLeft) {
      player.x -= player.speed;
    }
    if (keys.ArrowRight) {
      player.x += player.speed;
    }

    // Draw the player
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Request the next frame of the game loop
    requestAnimationFrame(gameLoop);
  }

  // Set up keyboard event listeners
  const keys = {};
  document.addEventListener("keydown", event => {
    keys[event.code] = true;
  });
  document.addEventListener("keyup", event => {
    keys[event.code] = false;
  });

  // Start the game loop
  gameLoop();
}