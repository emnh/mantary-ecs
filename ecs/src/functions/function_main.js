function main() {
  // Set the background color to blue
  document.body.style.backgroundColor = "blue";

  // Create a new image element for the jumping donkey
  const img = document.createElement("img");
  img.src = "jumping-donkey.gif";
  img.alt = "Jumping Donkey";

  // Set the position and size of the image
  img.style.position = "absolute";
  img.style.top = "50%";
  img.style.left = "50%";
  img.style.transform = "translate(-50%, -50%)";
  img.style.width = "200px";
  img.style.height = "200px";

  // Add the image to the page
  document.body.appendChild(img);
}