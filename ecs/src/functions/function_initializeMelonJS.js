async function initializeMelonJS() {
  const melonScript = await loadMelonJS();
  me.video.init(window.innerWidth, window.innerHeight, {
    wrapper: "screen",
    scale: "auto",
    renderer: me.video.CANVAS
  });
  me.audio.init("mp3,ogg");
  const imageDict = {
    platform: 'platform2.png',
    player: 'protagonist.png'
  };
  const images = await loadImages(imageDict);
  me.state.set(me.state.PLAY, new (await getPlayScreen(images))());
  me.state.change(me.state.PLAY);
}