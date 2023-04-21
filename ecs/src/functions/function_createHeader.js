function createHeader(title) {
  const header = document.createElement("header");
  header.style.backgroundColor = "black";
  header.style.color = "white";
  header.style.padding = "20px";
  header.innerHTML = `<h1 style='font-size: 48px;'>${title}</h1>`;
  return header;
}