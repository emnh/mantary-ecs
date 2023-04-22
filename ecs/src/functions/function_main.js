function main() {
  console.log('main');
  const script = document.createElement("script");
  script.src = "https://esm.run/melonjs";
  script.async = false;
  script.type = "text/javascript";
  script.onload = function () {
    example();
  };
  document.head.appendChild(script);
}