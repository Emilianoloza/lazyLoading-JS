const minimum = 1;
const maxium = 121; //valor sacado de la documentación de la API

const random = () => Math.floor(Math.random() * (maxium - minimum)) + minimum;

const createImageNode = () =>{
    const container = document.createElement('div');
    container.className = 'p-4'

    const image = document.createElement('img');
    image.className = 'mx-auto';
    image.width = '320';
    image.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(image);

    return container;
};

const mountNode = document.getElementById('images');
const addButton = document.getElementById('btnAdd');

const addImage = () => {
    const newImage = createImageNode();
    mountNode.appendChild(newImage);
};

addButton.addEventListener('click', addImage);


