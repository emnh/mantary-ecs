function loadMelonJS() {
  console.log('loadMelonJS');
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/melonjs/10.0.0/melonjs.min.js';
  document.head.appendChild(script);
}