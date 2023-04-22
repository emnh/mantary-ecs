function helloWorld() {
  console.log('helloWorld');
  const message = document.createElement("p");
  message.textContent = "Hello, world!";
  document.body.appendChild(message);
}