function createHeader(title) {
  const header = document.createElement("header");
  header.style.backgroundColor = "black";
  header.style.color = "white";
  header.style.padding = "20px";
  const titleDiv = document.createElement("div"); // Create a div element for the title
  titleDiv.style.fontSize = "48px";
  titleDiv.style.textAlign = "center"; // Center the text
  titleDiv.textContent = title; // Set the title text
  header.appendChild(titleDiv); // Add the title div to the header
  return header;
}