function insertCssWithLowestPriority(url) {
  console.log('insertCssWithLowestPriority');
  const linkElement = document.createElement("link");
  linkElement.setAttribute("rel", "stylesheet");
  linkElement.setAttribute("href", url);
  const headElement = document.getElementsByTagName("head")[0];
  const firstChildElement = headElement.firstChild;
  headElement.insertBefore(linkElement, firstChildElement);
}
