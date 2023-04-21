function main() {
  loadAssets();
  setupStates();
  me.state.change("play");
  game.start();
}