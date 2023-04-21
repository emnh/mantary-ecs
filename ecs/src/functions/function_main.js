function main() {
  // Set the background color to red
  document.body.style.backgroundColor = "red";

  // Create the header element
  const header = document.createElement("header");
  header.style.backgroundColor = "black";
  header.style.color = "white";
  header.style.padding = "20px";
  header.innerHTML = "<h1 style='font-size: 48px;'>Welcome to my cool webpage!</h1>";

  // Create the main content area
  const main = document.createElement("main");
  main.style.padding = "20px";
  main.innerHTML = "<p style='font-size: 24px;'>This is the main content area of my cool webpage.</p><p style='font-size: 24px;'>Here's a cool image:</p><img src='https://picsum.photos/400' alt='A random image from Lorem Picsum'>";

  // Create the footer element
  const footer = document.createElement("footer");
  footer.style.backgroundColor = "black";
  footer.style.color = "white";
  footer.style.padding = "20px";
  footer.innerHTML = "<p style='font-size: 24px;'>&copy; 2023 My Cool Webpage. All rights reserved.</p>";

  // Add the header, main content area, and footer to the page
  document.body.appendChild(header);
  document.body.appendChild(main);
  document.body.appendChild(footer);
}