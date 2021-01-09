const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text){
    console.log(text);
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    console.log("HI");
    const currentUser = localStorage.getItem(USER_LS);
    console.log(currentUser);
    if (currentUser === null){
        // user is not
        console.log("No");
        console.log(currentUser);
    } else {0
        // there is user
        console.log("YES");
        console.log(currentUser);
        paintGreeting(currentUser);

    }

}

function init(){
    loadName();
}

init();