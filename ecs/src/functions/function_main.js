function main() {
  const script = document.createElement("script");
  script.src = "https://esm.run/melonjs";
  script.async = true;
  script.onload = function () {
    example();
  };
  document.head.appendChild(script);
}