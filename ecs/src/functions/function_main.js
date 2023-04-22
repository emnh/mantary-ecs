async function main() {
  try {
    await loadDependencies();
    console.log('Dependencies have been loaded!');
    initializeMelonJS(game => {
      drawRectangle(game, 100, 100, 50, 50, '#FF0000');
    });
  } catch (error) {
    console.error(error);
  }
}