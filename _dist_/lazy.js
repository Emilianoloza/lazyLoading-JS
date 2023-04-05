const isIntersecting = (entry) => {
    return entry.isIntersecting //true is the element is visible or false if not;
};

const loadImage = (entry) => {
    const container = entry.target; //div
    const image = container.firstChild;
    const url = image.dataset.src;
    console.log('cargando imagen', url)
    //load image
    image.src = url;
    //unregister image
    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (image) => {
    observer.observe(image);
};