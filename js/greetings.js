const loginform = document.querySelector("#login-form")
const logininput = loginform.querySelector("input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const ID_USERNAME = "username"

const OnLoginSubmit = event => {
    event.preventDefault() // this func.. prevent base event process..
    const username = logininput.value
    localStorage.setItem(ID_USERNAME, username)
    loginform.classList.add(HIDDEN_CLASSNAME)
    PaintGreetings(username)
}

const PaintGreetings = username => {
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUserName = localStorage.getItem(ID_USERNAME)

if (null === savedUserName) {
    // show the form..
    loginform.classList.remove(HIDDEN_CLASSNAME)
    loginform.addEventListener("submit", OnLoginSubmit)
} else {
    // show the greeting
    PaintGreetings(savedUserName)
}