function addCopyCodeButton(tag, handler) {
  if (('debug' in window) && window.debug) console.log('addCopyCodeButton');
  const buttons = document.getElementsByTagName("button");
  const existingButton = buttons[0];
  const newButton = document.createElement("button");
  newButton.innerText = "Copy code";
  existingButton.parentNode.insertBefore(newButton, existingButton);
  newButton.addEventListener("click", function () {
    console.log(tag);
    handler();
  });
}
