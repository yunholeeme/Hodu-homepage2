const greetingForm = document.querySelector(".js-greetingForm"),
    greetingInput = greetingForm.querySelector("input");
const greetingHoler = document.querySelector(".greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveCurrentUser(name) {
    localStorage.setItem(USER_LS, name);
}

function handleSubmit(event) {
    event.preventDefault();
    
    const currentValue = greetingInput.value;
    greetingForm.classList.remove(SHOWING_CN);
    saveCurrentUser(currentValue);
    paintGreeting(currentValue);
}

function paintGreeting(text) {
    const currentName = text;
    // const parsedUser = JSON.parse(text);
    greetingHoler.classList.add(SHOWING_CN);
    greetingHoler.innerText = `Hello, ${currentName}`;
}

function askForName() {
    // greetingForm.classList.remove("form");
    greetingForm.classList.add(SHOWING_CN);
    greetingForm.addEventListener("submit", handleSubmit);

}
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();