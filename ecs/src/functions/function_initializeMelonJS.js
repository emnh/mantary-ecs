async function initializeMelonJS() {
  console.log('initializeMelonJS');
  const melonScript = await loadMelonJS();
  me.video.init(window.innerWidth, window.innerHeight, {
    wrapper: "screen",
    scale: "auto",
    renderer: me.video.CANVAS
  });
  me.audio.init("mp3,ogg");
  const imageFilenames = ['platform2.png', 'protagonist.png'];
  const images = await loadImages(imageFilenames);
  me.state.set(me.state.PLAY, new (await getPlayScreen(images))());
  me.state.change(me.state.PLAY);
}