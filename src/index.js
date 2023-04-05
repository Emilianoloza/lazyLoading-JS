import { registerImage } from "./lazy";

const minimum = 1;
const maxium = 121; //valor sacado de la documentación de la API

const random = () => Math.floor(Math.random() * (maxium - minimum)) + minimum;

const createImageNode = () =>{
    const container = document.createElement('div');
    container.className = 'p-4'

    const image = document.createElement('img');
    image.className = 'mx-auto';
    image.width = '320';
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(image);

    return container;
};

const mountNode = document.getElementById('images');
const addButton = document.getElementById('btnAdd');
const clearButton = document.getElementById('btnClear');

const addImage = () => {
    const newImage = createImageNode();
    mountNode.appendChild(newImage);
    registerImage(newImage);
};

const cleanImages = () => {
    [...mountNode.childNodes].forEach(child => {
        child.remove();
    }) 
}

addButton.addEventListener('click', addImage);
clearButton.addEventListener('click', cleanImages);

