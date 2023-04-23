function addCommitButton(tag, handler) {
  if (('debug' in window) && window.debug) console.log('addCommitButton');
  const buttons = document.getElementsByTagName("button");
  let existingButton;
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerText === "Copy code") {
      existingButton = buttons[i];
      break;
    }
  }
  const newButton = document.createElement("button");
  newButton.innerText = "commit";
  existingButton.parentNode.insertBefore(newButton, existingButton);
  newButton.addEventListener("click", function () {
    console.log(tag);
    handler();
  });
}
