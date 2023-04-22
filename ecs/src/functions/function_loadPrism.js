function loadPrism() {
  console.log('loadPrism');
  const prismStylesheet = document.createElement("link");
  prismStylesheet.setAttribute("rel", "stylesheet");
  prismStylesheet.setAttribute("href", "https://cdn.jsdelivr.net/npm/prismjs/themes/prism.css");
  document.head.appendChild(prismStylesheet);
  const prismScript = document.createElement("script");
  prismScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/prismjs/prism.js");
  document.head.appendChild(prismScript);
}
