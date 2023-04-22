function fitTextAreaToText(textarea) {
  console.log('fitTextAreaToText');
  const style = window.getComputedStyle(textarea);
  const span = document.createElement("span");
  span.style.font = style.font;
  span.style.fontSize = style.fontSize;
  span.style.wordWrap = "break-word";
  span.textContent = textarea.value;
  document.body.appendChild(span);
  const rect = span.getBoundingClientRect();
  textarea.style.width = rect.width + "px";
  textarea.style.height = rect.height + "px";
  document.body.removeChild(span);
}