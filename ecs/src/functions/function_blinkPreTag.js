function blinkPreTag(preElement, duration) {
  console.log('blinkPreTag');
  preElement.classList.add("blink");
  setTimeout(function () {
    preElement.classList.remove("blink");
  }, duration);
}