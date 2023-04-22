async function main() {
  try {
    await loadDependencies();
    console.log('Dependencies have been loaded!');
    initializeMelonJS(game => {
      console.log('melonJS has been initialized!');
    });
  } catch (error) {
    console.error(error);
  }
}