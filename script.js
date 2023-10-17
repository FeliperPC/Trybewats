const btnLogin = document.querySelector('#btn-login');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');
const checkAgreed = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const textCount = document.querySelector('#counter');

let string = '';

const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const formInputEmail = document.querySelector('#input-email');
const inputSelect = document.querySelector('#house');
const inputFamilyRadios = document.getElementsByName('family');
const inputTechList = document.querySelectorAll('.tech');
const inputRate = document.getElementsByName('rate');

const loginUser = () => {
    if (getEmail() === 'tryber@teste.com' && getPassword() === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
};

const getEmail = () => document.querySelector('#email').value;
const getPassword = () => document.querySelector('#password').value;

submitBtn.disabled = true;
const btnVisibility = () => {
    if (checkAgreed.checked) submitBtn.disabled = false;
};

textCount.value = 500;
const setCounter = (event) => {
    const textAreaInfo = event.target.value;
    string = textAreaInfo;
    textCount.value = 500 - (string.length - 1);
    textCount.innerText = textCount.value;
};

const setInputValues = () => {
    sessionStorage.setItem('name', inputName.value);
    sessionStorage.setItem('lastName', inputLastName.value);
    sessionStorage.setItem('email', formInputEmail.value);
    sessionStorage.setItem('house', inputSelect.value);

    let familyRadioIndex;
    for (let i = 0; i < inputFamilyRadios.length; i += 1) {
        if (inputFamilyRadios[i].checked) familyRadioIndex = i;
    }
    sessionStorage.setItem('family', familyRadioIndex);

    let selectedTechs = [];
    for (let i = 0; i < inputTechList.length; i += 1) {
        if (inputTechList[i].checked) {
            selectedTechs.push(i);
        }
    }
    sessionStorage.setItem('techSelectedIndex', selectedTechs);

    let rateRadioIndex;
    for (let i = 0; i < inputRate.length; i += 1) {
        if (inputRate[i].checked) rateRadioIndex = i;
    }
    sessionStorage.setItem('rate', rateRadioIndex);
    sessionStorage.setItem('textAreaInfo',textArea.value);
};

btnLogin.addEventListener('click', loginUser);
inputEmail.addEventListener('change', getEmail);
inputPassword.addEventListener('change', getPassword);
checkAgreed.addEventListener('click', btnVisibility);
textArea.addEventListener('keydown', setCounter);
submitBtn.addEventListener('click', setInputValues);

window.addEventListener('load', () => {
    if (sessionStorage.getItem('name')) inputName.value = sessionStorage.getItem('name');
    if (sessionStorage.getItem('lastName')) inputLastName.value = sessionStorage.getItem('lastName');
    if (sessionStorage.getItem('email')) formInputEmail.value = sessionStorage.getItem('email');
    if (sessionStorage.getItem('house')) inputSelect.value = sessionStorage.getItem('house');
    if (sessionStorage.getItem('family')) {
        const index = sessionStorage.getItem('family');
        inputFamilyRadios[index].checked = true;
    }
    if (sessionStorage.getItem('techSelectedIndex')) {
        const indexList = sessionStorage.getItem('techSelectedIndex')
        const newItens = indexList.split(',').join('');
        for(let i=0;i<newItens.length;i+=1){
            const index = parseInt(newItens[i]);
            inputTechList[index].checked = true;
        }
    }
    if (sessionStorage.getItem('rate')) {
        const index = sessionStorage.getItem('rate');
        inputRate[index].checked = true;
    }
    if (sessionStorage.getItem('textAreaInfo')) textArea.value = sessionStorage.getItem('textAreaInfo');
});