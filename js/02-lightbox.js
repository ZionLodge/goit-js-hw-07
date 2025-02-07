import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Functia pentru a crea markup-ul pentru fiecare element de galerie
function createGalleryItem(item) {
  const li = document.createElement("li");
  li.classList.add("gallery__item");

  const a = document.createElement("a");
  a.classList.add("gallery__link");
  a.href = item.original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = item.preview;
  img.alt = item.description;

  a.appendChild(img);
  li.appendChild(a);

  return li;
}

// Functia pentru a adauga elementele de galerie in lista ul.gallery
function renderGallery(items) {
  const gallery = document.querySelector(".gallery");
  items.forEach((item) => {
    const galleryItem = createGalleryItem(item);
    gallery.appendChild(galleryItem);
  });
}

// Randam galeria la incarcarea paginii
document.addEventListener("DOMContentLoaded", () => {
  renderGallery(galleryItems);

  // SimpleLightbox
  const gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    closeText: "Închide",
    alertErrorMessage: "Nu s-a putut încărca imaginea.",
    captionPosition: "bottom", // Textul sugestiv va aparea in partea de jos
    captionDelayTime: 250, // Afisam textul dupa 250ms
  });
});
