function createCanvas(width, height) {
  console.log('createCanvas');
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.style.border = "1px solid black";
  canvas.style.margin = "0 auto";
  return canvas;
}