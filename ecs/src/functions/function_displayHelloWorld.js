function displayHelloWorld() {
  console.log('displayHelloWorld');
  const heading = document.createElement('h1');
  heading.textContent = 'Hello World!';
  document.body.appendChild(heading);
}