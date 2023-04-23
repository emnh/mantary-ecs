function getTextContentWithoutApptyapp(node) {
  if (('debug' in window) && window.debug) console.log('getTextContentWithoutApptyapp');
  let textContent = "";
  if (node.nodeType === Node.TEXT_NODE) {
    textContent = node.textContent;
  }
  if (node.nodeType === Node.ELEMENT_NODE) {
    for (let i = 0; i < node.childNodes.length; i++) {
      const childNode = node.childNodes[i];
      if (childNode.nodeType === Node.TEXT_NODE || childNode.nodeType === Node.ELEMENT_NODE && !childNode.classList.contains("apptyapp")) {
        textContent += getTextContentWithoutApptyapp(childNode);
      }
    }
  }
  return textContent;
}
