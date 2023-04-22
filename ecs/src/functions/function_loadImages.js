async function loadImages(imageFilenames) {
  console.log('loadImages');
  const images = {};
  for (const filename of imageFilenames) {
    const imageUrl = `./images/${filename}`;
    const image = await getImage(imageUrl);
    if (!image) {
      console.error(`Failed to load image from URL: ${imageUrl}`);
      continue;
    }
    images[filename] = image;
  }
  return images;
}