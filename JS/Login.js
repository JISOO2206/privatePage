const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting(userName);
}

/* local storage
    *   - 브라우저에서 무언갈 기억해주는 무료 API
    *   - 개발자 도구를 이용해서 사용할 수 있음
    *   - 여기에는 사용할 수 있는 다양한 method가 있는데
    *     setItem을 활용하면 local storage에 정보를 저장할 수 있음.
    *     ex) localStorage.setItem
    *     저장형태는 key, value 형식이다.
    * */

function paintGreeting(userName){
    greeting.innerText = `Hello ${localStorageSavedUserName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const localStorageSavedUserName = localStorage.getItem(USERNAME_KEY);

if(localStorageSavedUserName === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    //show the greeting
    paintGreeting(localStorageSavedUserName);
}