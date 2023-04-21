function blinkPreTag(preElement, duration) {
  console.log('blinkPreTag');
  var styleEl = document.getElementById("blink-animation-styles");
  if (!styleEl) {
    var styleText = "@keyframes blink { 50% { opacity: 0; } } pre.blink { animation: blink " + duration / 1000 + "s infinite; }";
    styleEl = document.createElement("style");
    styleEl.setAttribute("id", "blink-animation-styles");
    styleEl.appendChild(document.createTextNode(styleText));
    document.head.appendChild(styleEl);
  }
  preElement.classList.add("blink");
  setTimeout(function () {
    preElement.classList.remove("blink");
  }, duration);
}