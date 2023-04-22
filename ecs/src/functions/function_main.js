async function main() {
  console.log('main');
  const melonjs = await import("https://esm.run/melonjs@latest/dist/melonjs.module.js");
  example(melonjs.default);
}