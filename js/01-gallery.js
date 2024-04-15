import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

var styleSheet = document.createElement("style");
styleSheet.innerText = `https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css`;
document.head.appendChild(styleSheet);

var scriptSheet = document.createElement("script");
scriptSheet.src = "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";
document.head.appendChild(scriptSheet);

import * as basicLightbox from "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";

let fullGallery = galleryItems.map(galleryItem => galleryItem.preview);

const instance = basicLightbox.create(`
    <img src=${fullGallery[0]} width="800" height="600">
`);

instance.show();