import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryVal = document.querySelector(".gallery");

function imagesCreate() {
    const imagesDone = [];
    for (const image of galleryItems) {
        const imageMade = document.createElement("li");
        imageMade.classList.add("gallery__item");
        imageMade.innerHTML = 
        `<a class="gallery__link" href="${image.preview}">
            <img
                class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
            />
        </a>`;
        imagesDone.push(imageMade);
    }
    galleryVal.append(...imagesDone);
}

imagesCreate();

function addGalleryItemsListener() {
    galleryVal.addEventListener("click", (event) => {
        if (event.target.classList.contains("gallery__image")){
            event.preventDefault();
            const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`, {
                onShow: (instance) => {
                    document.body.onkeydown = function(event){
                        if(event.key == "Escape"){
                            instance.close(); }
                    }
                }
            });
            instance.show();
        }
    });
}

addGalleryItemsListener();
