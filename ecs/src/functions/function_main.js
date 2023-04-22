async function main() {
  console.log('main');
  const melonjs = await import("https://esm.run/melonjs@latest/dist/melonjs.module.js");
  console.log("melonjs loaded:", melonjs.default);
  example(melonjs.default);
}