const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const link = document.querySelector("#nameBase a");
const greeting = document.querySelector('.greeting');

const HIDDEN = 'hidden';
const USER_NAME = 'username';

let onLoginSubmit = (event) => {
    event.preventDefault();
    loging(loginInput.value);      
}

let loging = (username) => {
    const state = loginForm.classList.contains(HIDDEN);
    if(state) {
        setGreetingInnerText('');
    } else {        
        setGreetingInnerText(`Hello ${username}`);
        localStorage.setItem(USER_NAME, username);
    }    
    changeToggle(loginForm, HIDDEN); 
}
 
let onlinkClick = (event) => {
    //alert('clicked!!'); // html all stop while alert events
    changeToggle(loginForm, HIDDEN);
    event.preventDefault();
    console.dir(event);
}

let changeToggle = (item, className) => {
    item.classList.toggle(className);
}

let setGreetingInnerText = (username) => {
    greeting.innerText = username;
    if(username) {
        greeting.classList.remove(HIDDEN)
    } else {
        greeting.classList.add(HIDDEN);
    }    
}
window.onload = function() {
    const username = localStorage.getItem(USER_NAME);
    if(username !== null) setGreetingInnerText(`Hello ${username}`);
    else changeToggle(loginForm, HIDDEN);
}

link.addEventListener('click', onlinkClick);
loginForm.addEventListener('submit',onLoginSubmit);