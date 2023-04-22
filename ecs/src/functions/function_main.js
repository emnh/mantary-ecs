function main() {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/melonjs@15.1.1/dist/melonjs.min.js";
  script.async = false;
  script.type = "text/javascript";
  script.onload = function () {
    example();
  };
  document.head.appendChild(script);
}