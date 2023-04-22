async function loadImages(imageUrls) {
  console.log('loadImages');
  const images = {};
  for (const imageUrl of imageUrls) {
    const image = await getImage(imageUrl);
    if (!image) {
      console.error(`Failed to load image from URL: ${imageUrl}`);
      continue;
    }
    images[imageUrl] = image;
  }
  return images;
}