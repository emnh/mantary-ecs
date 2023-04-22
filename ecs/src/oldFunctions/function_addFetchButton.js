function addFetchButton(textareaElement) {
  console.log('addFetchButton');
  const buttonElement = document.createElement("button");
  buttonElement.innerText = "Fetch Signatures";
  buttonElement.style.marginLeft = "10px";
  buttonElement.onclick = async () => {
    try {
      const response = await fetch("http://localhost:5000/signatures.json");
      const data = await response.json();
      textareaElement.value = JSON.stringify(data);
    } catch (error) {
      console.error(error);
    }
  };
  textareaElement.parentNode.insertBefore(buttonElement, textareaElement.nextSibling);
}
