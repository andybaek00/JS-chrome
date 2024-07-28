const login_form = document.querySelector("#login-form");
const login_form_input = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLogInSubmit(event) {
    event.preventDefault();
    login_form.classList.add(HIDDEN_CLASSNAME);
    const username = login_form_input.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username)
}

function paintGreetings(username) {
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)
 
if (savedUsername === null) {
    login_form.classList.remove(HIDDEN_CLASSNAME);
    login_form.addEventListener("submit", onLogInSubmit);
} else {
    paintGreetings(savedUsername);
}
