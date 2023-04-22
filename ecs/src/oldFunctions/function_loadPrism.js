function loadPrism() {
  console.log('loadPrism');
  return new Promise((resolve, reject) => {
    window.Prism = window.Prism || ({});
    window.Prism.manual = true;
    const prismStylesheet = document.createElement("link");
    prismStylesheet.setAttribute("rel", "stylesheet");
    prismStylesheet.setAttribute("href", "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.css");
    document.head.appendChild(prismStylesheet);
    const prismScript = document.createElement("script");
    prismScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.js");
    prismScript.dataset.manual = true;
    const prismScript3 = document.createElement("script");
    prismScript3.setAttribute("src", "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/autoloader/prism-autoloader.js");
    prismScript3.dataset.manual = true;
    const prismStylesheet2 = document.createElement("link");
    prismStylesheet2.setAttribute("rel", "stylesheet");
    prismStylesheet2.setAttribute("href", "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/diff-highlight/prism-diff-highlight.css");
    const prismScript2 = document.createElement("script");
    prismScript2.setAttribute("src", "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/diff-highlight/prism-diff-highlight.js");
    prismScript2.dataset.manual = true;
    let scriptsLoaded = 0;
    const totalScripts = 4;
    const checkAllScriptsLoaded = () => {
      scriptsLoaded++;
      if (scriptsLoaded === totalScripts) {
        resolve();
      }
    };
    const handleScriptError = error => {
      reject(error);
    };
    prismScript.addEventListener("load", checkAllScriptsLoaded);
    prismScript.addEventListener("error", handleScriptError);
    prismScript3.addEventListener("load", checkAllScriptsLoaded);
    prismScript3.addEventListener("error", handleScriptError);
    prismScript2.addEventListener("load", checkAllScriptsLoaded);
    prismScript2.addEventListener("error", handleScriptError);
    prismStylesheet.addEventListener("load", checkAllScriptsLoaded);
    prismStylesheet.addEventListener("error", handleScriptError);
    document.head.appendChild(prismScript);
    document.head.appendChild(prismScript3);
    document.head.appendChild(prismStylesheet2);
  });
}
