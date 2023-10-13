const btnLogin = document.querySelector('#btn-login');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');

const loginUser = () => {
    if(getEmail() === 'tryber@teste.com' && getPassword() === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
};

const getEmail = () => document.querySelector('#email').value;
const getPassword = () => document.querySelector('#password').value;

btnLogin.addEventListener('click', loginUser);
inputEmail.addEventListener('change',getEmail);
inputPassword.addEventListener('change',getPassword)