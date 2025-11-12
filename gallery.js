// Fetch and display images
fetch("gallery.json")
  .then(response => response.json())
  .then(data => {
    loadGallery("wedding-gallery", data.wedding);
    loadGallery("product-gallery", data.product);
    loadGallery("event-gallery", data.event);
  })
  .catch(err => console.error("Error loading gallery:", err));

function loadGallery(sectionId, images) {
  const container = document.getElementById(sectionId);
  images.forEach(image => {
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.addEventListener("click", () => openLightbox(image.src));
    container.appendChild(img);
  });
}

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

function openLightbox(src) {
  lightbox.style.display = 'block';
  lightboxImg.src = src;
}

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', e => {
  if (e.target !== lightboxImg) lightbox.style.display = 'none';
});
