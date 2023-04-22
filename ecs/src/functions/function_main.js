async function main() {
  console.log('main');
  try {
    await loadMelonJS();
    console.log('melonJS has been loaded!');
    const me = window.me;
  } catch (error) {
    console.error(error);
  }
}