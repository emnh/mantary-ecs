function appendSiblingTagAfter(targetElement, newTagName, text) {
  console.log('appendSiblingTagAfter');
  const newTag = document.createElement(newTagName);
  newTag.textContent = text;
  targetElement.insertAdjacentElement("afterend", newTag);
}