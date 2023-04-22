async function getImage(url) {
  console.log('getImage');
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = err => reject(err);
    image.src = url;
  });
}