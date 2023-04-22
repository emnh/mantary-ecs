function injectStylesheet(url) {
  console.log('injectStylesheet');
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}
