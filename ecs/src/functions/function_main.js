function main() {
  // Set up the game canvas
  const canvas = createCanvas(800, 600);
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  // Create the game objects
  const player = createPlayer(50, 50, "blue");
  const platforms = [    createPlatform(0, 550, canvas.width, 50, "grey"),    createPlatform(50, 400, 200, 50, "brown"),    createPlatform(500, 300, 200, 50, "brown"),    createPlatform(300, 200, 200, 50, "brown"),    createPlatform(50, 100, 200, 50, "brown")  ];

  // Set up the game loop
  const keys = {};
  const update = () => {
    handleInput(player, keys);
    updatePlayer(player, platforms, canvas);
    drawGame(ctx, platforms, player);
    requestAnimationFrame(update);
  };

  // Set up keyboard event listeners
  document.addEventListener("keydown", event => {
    keys[event.code] = true;
  });
  document.addEventListener("keyup", event => {
    keys[event.code] = false;
  });

  // Start the game loop
  requestAnimationFrame(update);
}