import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Selectarea containerului galeriei
const galleryContainer = document.querySelector(".gallery");

// Crearea si randarea marcajului galeriei
const createGalleryItems = (items) => {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
};

galleryContainer.innerHTML = createGalleryItems(galleryItems);

// Delegarea evenimentului click la containerul galeriei
galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  const isGalleryImage = event.target.classList.contains("gallery__image");

  if (!isGalleryImage) {
    return;
  }

  const imageUrl = event.target.dataset.source;
  openModal(imageUrl);
});

const openModal = (url) => {
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
  `);

  instance.show();

  // Inchiderea modalului la apasarea tastei Escape
  const closeModalOnEsc = (event) => {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeModalOnEsc);
    }
  };

  document.addEventListener("keydown", closeModalOnEsc);
};
