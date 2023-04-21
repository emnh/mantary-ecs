function appendTextAfterTag(tagName, text) {
  console.log('appendTextAfterTag');
  const tags = document.getElementsByTagName(tagName);
  const lastTag = tags[tags.length - 1];
  lastTag.innerHTML += text;
}