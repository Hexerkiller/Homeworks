const login = document.querySelector('#login')
const password = document.querySelector('#password')
const form = document.querySelector('#form')
const massange = document.querySelector('#massange')

const log = 'lllppp'
const pass = 'pfpd5'

form.addEventListener('submit',(event)=> {
    event.preventDefault();

    const newlog = login.value
    const newpass = password.value

    if(newlog === log && newpass === pass ){
        massange.textContent = "Удачний вход"
    }
    else{
        massange.textContent = "неверний логин или пароль"
    }
})