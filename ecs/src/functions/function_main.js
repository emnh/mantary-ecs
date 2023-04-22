function main() {
  console.log('main');
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/melonjs@15.1.1/dist/melonjs.module.js";
  script.async = false;
  script.type = "module";
  script.onload = function () {
    example();
  };
  document.head.appendChild(script);
}