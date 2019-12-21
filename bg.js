const body = document.querySelector("body");

const IMG_NUM = 5;
function loadImages(numImage) {
    const image = new Image();
    image.src = `images/hodu${numImage + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genNumber(imageNumbers) {
    const number = Math.floor(Math.random() * imageNumbers);
    // console.log(number)

    return number;
}
function init() {
    const numImage = genNumber(IMG_NUM);
    loadImages(numImage);
}

init();