async function loadImages(imageDict) {
  console.log('loadImages');
  const images = {};
  for (const [name, url] of Object.entries(imageDict)) {
    const imageUrl = `./images/${url}`;
    const image = await getImage(imageUrl);
    if (!image) {
      console.error(`Failed to load image from URL: ${imageUrl}`);
      continue;
    }
    images[name] = image;
  }
  return images;
}