function createHeader(title) {
  console.log('createHeader');
  const header = document.createElement("header");
  header.style.backgroundColor = "black";
  header.style.color = "white";
  header.style.padding = "20px";
  header.innerHTML = `<h1 style='font-size: 48px;'>${title}</h1>`;
  return header;
}
function createMain(content) {
  const main = document.createElement("main");
  main.style.padding = "20px";
  main.innerHTML = `<p style='font-size: 24px;'>${content}</p>`;
  return main;
}
function createFooter(content) {
  const footer = document.createElement("footer");
  footer.style.backgroundColor = "black";
  footer.style.color = "white";
  footer.style.padding = "20px";
  footer.innerHTML = `<p style='font-size: 24px;'>${content}</p>`;
  return footer;
}
function addElementToBody(element) {
  document.body.appendChild(element);
}
function main() {
  document.body.style.backgroundColor = "red";
  const header = createHeader("Welcome to my cool webpage!");
  const main = createMain("<p>This is the main content area of my cool webpage.</p><p>Here's a cool image:</p><img src='https://picsum.photos/400' alt='A random image from Lorem Picsum'>");
  const footer = createFooter("&copy; 2023 My Cool Webpage. All rights reserved.");
  addElementToBody(header);
  addElementToBody(main);
  addElementToBody(footer);
}
