function loadMelonJS() {
  console.log('loadMelonJS');
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://esm.run/melonjs';
    script.addEventListener('load', () => {
      resolve();
    });
    script.addEventListener('error', () => {
      reject(new Error('Failed to load melonJS'));
    });
    document.head.appendChild(script);
  });
}