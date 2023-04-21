function createHeader(title) {
  console.log('createHeader');
  const header = document.createElement("header");
  header.style.backgroundColor = "black";
  header.style.color = "white";
  header.style.padding = "20px";
  const titleDiv = document.createElement("div");
  titleDiv.style.fontSize = "48px";
  titleDiv.style.textAlign = "center";
  titleDiv.textContent = title;
  header.appendChild(titleDiv);
  return header;
}