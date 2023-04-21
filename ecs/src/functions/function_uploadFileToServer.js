function uploadFileToServer(filename, content) {
  console.log('uploadFileToServer');
  return new Promise((resolve, reject) => {
    const url = 'http://localhost:5000/upload';
    const data = {
      filename: filename,
      content: content
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch(url, options).then(response => response.text()).then(result => {
      console.log(filename, result);
      resolve(result);
    }).catch(error => {
      console.error(filename, error);
      reject(error);
    });
  });
}
