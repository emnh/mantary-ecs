function setPrismBackgroundColor(color) {
  console.log('setPrismBackgroundColor');
  const style = document.createElement("style");
  style.innerHTML = `
    pre[class*="language-"] {
      background-color: ${color};
    }

    pre[class*="language-"] .line-highlight {
      background-color: ${color};
    }
  `;
  document.head.appendChild(style);
}
