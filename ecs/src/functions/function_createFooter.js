function createFooter(content) {
  const footer = document.createElement("footer");
  footer.style.backgroundColor = "black";
  footer.style.color = "white";
  footer.style.padding = "20px";
  footer.innerHTML = `<p style='font-size: 24px;'>${content}</p>`;
  return footer;
}