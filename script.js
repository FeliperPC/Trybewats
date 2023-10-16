const btnLogin = document.querySelector('#btn-login');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');
const checkAgreed = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const textCount = document.querySelector('#counter');

let string = ''; 
let userName = '';

const inputName = document.querySelector('#input-name');

const loginUser = () => {
    if(getEmail() === 'tryber@teste.com' && getPassword() === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
};

const getEmail = () => document.querySelector('#email').value;
const getPassword = () => document.querySelector('#password').value;

const btnVisibility = () => {
    if (checkAgreed.checked){
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
};
textCount.value = 500;
const setCounter = (event) => {
    const textAreaInfo = event.target.value;
    string = textAreaInfo;
    textCount.value = 500 - (string.length - 1);
    textCount.innerText = textCount.value;
};

const setName = () => {
    userName = inputName.value;
    sessionStorage.setItem('nome',userName);
};

const setInputValues = () => {
    inputName.value = sessionStorage.getItem('nome');
};

btnLogin.addEventListener('click', loginUser);
inputEmail.addEventListener('change',getEmail);
inputPassword.addEventListener('change',getPassword);
checkAgreed.addEventListener('click',btnVisibility);
textArea.addEventListener('keydown',setCounter);
inputName.addEventListener('change',setName);

window.onload = btnVisibility,setInputValues;