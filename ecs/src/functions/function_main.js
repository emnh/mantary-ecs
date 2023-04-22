function main() {
  console.log('main');
  const script = document.createElement("script");
  script.src = "https://esm.run/melonjs@latest/dist/melonjs.module.js";
  script.async = false;
  script.type = "module";
  script.onload = async function () {
    const melonjs = await import("https://esm.run/melonjs@latest/dist/melonjs.module.js");
    example(melonjs);
  };
  document.head.appendChild(script);
}