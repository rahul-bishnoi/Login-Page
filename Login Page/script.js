const container = document.querySelector('.container');
const login = document.querySelector('.login-link');
const register = document.querySelector('.register-link');

const Flogin = document.querySelector('.Flogin-link');
const FPass = document.querySelector('.forgot-link');

register.addEventListener('click', ()=>{
    container.classList.add('active')
});

login.addEventListener('click', ()=>{
    container.classList.remove('active')
});

FPass.addEventListener('click', ()=>{
    container.classList.add('act')
});
Flogin.addEventListener('click', ()=>{
    container.classList.remove('act')
});
