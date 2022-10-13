const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');

let handleLoginButton = () => {
    const username = loginInput.value;
    /*    
    if('' === username) alert('please input your name');
    else if(20 < username.length) alert('your name is too long');
    else console.log('good job')
    */
    console.log(username);
}

loginButton.addEventListener('click',handleLoginButton);
console.log(loginInput);