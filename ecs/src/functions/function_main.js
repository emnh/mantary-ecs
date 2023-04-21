function main() {
  // Set the background color to red
  document.body.style.backgroundColor = "red";

  // Create the header element
  const header = createHeader("Welcome to my cool webpage!");

  // Create the main content area
  const main = createMain("<p>This is the main content area of my cool webpage.</p><p>Here's a cool image:</p><img src='https://picsum.photos/400' alt='A random image from Lorem Picsum'>");

  // Create the footer element
  const footer = createFooter("&copy; 2023 My Cool Webpage. All rights reserved.");

  // Add the header, main content area, and footer to the page
  addElementToBody(header);
  addElementToBody(main);
  addElementToBody(footer);
}