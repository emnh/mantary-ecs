function fetchGoogle() {
  console.log('fetchGoogle');
  fetch('https://www.google.com').then(response => response.text()).then(data => console.log(data)).catch(error => console.error(error));
}
