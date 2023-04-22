async function loadDependencies() {
  console.log('loadDependencies');
  try {
    await loadMelonJS();
    console.log('melonJS has been loaded!');
  } catch (error) {
    console.error(error);
  }
}