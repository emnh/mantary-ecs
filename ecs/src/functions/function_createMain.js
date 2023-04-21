function createMain(content) {
  console.log('createMain');
  const main = document.createElement("main");
  main.style.padding = "20px";
  main.style.paddingBottom = "40px";
  main.innerHTML = `<p style='font-size: 24px;'>${content}</p>`;
  return main;
}
