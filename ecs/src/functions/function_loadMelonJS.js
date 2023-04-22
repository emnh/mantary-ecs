function loadMelonJS() {
  console.log('loadMelonJS');
  const script = document.createElement('script');
  script.src = 'https://esm.run/melonjs';
  document.head.appendChild(script);
}