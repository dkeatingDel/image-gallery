const form = document.getElementById('image-form');
const gallery = document.getElementById('gallery');
const galleryInfo = document.getElementById('gallery-info');
const dropZone = document.getElementById('drop-zone');

function createGalleryItem(url) {
  const item = document.createElement('div');
  item.className = 'gallery-item';

  const img = document.createElement('img');
  img.src = url;
  img.alt = 'Gallery image';
  img.onerror = () => {
    img.src = '';
    img.alt = 'Unable to load image';
    item.classList.add('gallery-item--error');
    caption.textContent = 'Unable to load preview: ' + url;
  };

  const caption = document.createElement('div');
  caption.className = 'gallery-caption';
  caption.textContent = url;

  item.appendChild(img);
  item.appendChild(caption);
  return item;
}

function populateInputs(urls) {
  for (let i = 1; i <= 5; i += 1) {
    const input = document.getElementById(`image-url-${i}`);
    input.value = urls[i - 1] || '';
  }
}

function parseDroppedText(text) {
  return text
    .split(/\s+/)
    .map(value => value.trim())
    .filter(value => value)
    .slice(0, 5);
}

function updateGalleryInfo(count) {
  if (count === 0) {
    galleryInfo.textContent = 'No images added yet.';
  } else if (count === 1) {
    galleryInfo.textContent = 'Showing 1 image.';
  } else {
    galleryInfo.textContent = `Showing ${count} images.`;
  }
}

function showGallery(urls) {
  gallery.innerHTML = '';
  urls.forEach(url => gallery.appendChild(createGalleryItem(url)));

  if (urls.length === 0) {
    gallery.innerHTML = '<p class="gallery-placeholder">Your images will appear here after you click Show Images.</p>';
  }

  updateGalleryInfo(urls.length);
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const urls = [];
  for (let i = 1; i <= 5; i += 1) {
    const input = document.getElementById(`image-url-${i}`);
    const url = input.value.trim();
    if (url) {
      urls.push(url);
    }
  }

  showGallery(urls);
});

function setDropZoneActive(active) {
  dropZone.classList.toggle('drop-zone--active', active);
}

dropZone.addEventListener('dragover', event => {
  event.preventDefault();
  setDropZoneActive(true);
});

dropZone.addEventListener('dragleave', () => {
  setDropZoneActive(false);
});

dropZone.addEventListener('drop', event => {
  event.preventDefault();
  setDropZoneActive(false);

  const droppedText = event.dataTransfer.getData('text/plain');
  const urls = parseDroppedText(droppedText);
  if (urls.length) {
    populateInputs(urls);
    showGallery(urls);
  }
});

updateGalleryInfo(0);
