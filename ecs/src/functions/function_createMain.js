function createMain(content) {
  const main = document.createElement("main");
  main.style.padding = "20px";
  main.style.paddingBottom = "40px";
  main.innerHTML = `
    <p style='font-size: 24px;'>${content}</p>
    <div style='width: 400px; height: 400px; background-color: black;'></div>
  `;
  return main;
}