function wrapText(text) {
  console.log('wrapText');
  const words = text.split(" ");
  let currentLine = "";
  const lines = [];
  words.forEach(word => {
    if (currentLine.length + word.length <= 80) {
      currentLine += word + " ";
    } else {
      lines.push(currentLine.trim());
      currentLine = word + " ";
    }
  });
  if (currentLine.length > 0) {
    lines.push(currentLine.trim());
  }
  return lines.join("\n");
}