const form = document.getElementById('image-form');
const gallery = document.getElementById('gallery');

function createGalleryItem(url) {
  const item = document.createElement('div');
  item.className = 'gallery-item';

  const img = document.createElement('img');
  img.src = url;
  img.alt = 'Gallery image';

  const caption = document.createElement('p');
  caption.textContent = url;

  item.appendChild(img);
  item.appendChild(caption);
  return item;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = '';

  for (let i = 1; i <= 5; i += 1) {
    const input = document.getElementById(`image-url-${i}`);
    const url = input.value.trim();

    if (url) {
      const galleryItem = createGalleryItem(url);
      gallery.appendChild(galleryItem);
    }
  }

  if (!gallery.hasChildNodes()) {
    gallery.innerHTML = '<p>No image URLs were added yet.</p>';
  }
});
