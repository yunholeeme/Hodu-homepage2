const clockContainer = document.querySelector(".js-clock"),
    clockContent = clockContainer.querySelector("h1");

function paintClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockContent.innerText = `${hours < 10 ? `0${hours}`:hours}:\
${minutes < 10 ? `0${minutes}`:minutes}`;
// :${seconds < 10 ? `0${seconds}`:seconds}`;
}

function init() {
    setInterval(paintClock, 500);
}

init();