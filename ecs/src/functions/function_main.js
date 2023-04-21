function main() {
  // Create the header section
  const header = document.createElement("header");
  header.style.backgroundColor = "#333";
  header.style.color = "#fff";
  header.style.padding = "10px";
  header.style.textAlign = "center";
  header.innerHTML = "<h1>Cool Website</h1>";

  // Create the main section
  const main = document.createElement("main");
  main.style.padding = "20px";
  main.innerHTML = `
    <h2>Welcome to my cool website!</h2>
    <p>This is some text on my page.</p>
    <button style="background-color: #333; color: #fff; padding: 10px;">Click me!</button>
  `;

  // Create the footer section
  const footer = document.createElement("footer");
  footer.style.backgroundColor = "#333";
  footer.style.color = "#fff";
  footer.style.padding = "10px";
  footer.style.textAlign = "center";
  footer.innerHTML = "<p>&copy; 2023 Cool Website</p>";

  // Add the sections to the page
  document.body.appendChild(header);
  document.body.appendChild(main);
  document.body.appendChild(footer);
}