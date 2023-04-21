function appendSiblingTagAfter(targetElement, newTagName) {
  console.log('appendSiblingTagAfter');
  const newTag = document.createElement(newTagName);
  targetElement.insertAdjacentElement("afterend", newTag);
}