const sidebar = document.querySelector('.sidebar')
const btnToggle = document.querySelector('#menuToggle')

const home =document.querySelector("#home")
const homeitems = document.querySelector(".homeitems")

const about = document.querySelector('#about')
const aboutitems =document.querySelector('.aboutitems')

const register = document.querySelector('#register')
const registeritems = document.querySelector('.registeritems')





home.addEventListener('click',()=>{
    homeitems.classList.toggle('homeopen')
})


about.addEventListener('click',()=>{
    aboutitems.classList.toggle('aboutopen')
})

register.addEventListener('click',()=>{
    registeritems.classList.toggle('registeropen')

})


btnToggle.addEventListener('click',()=>{
    sidebar.classList.toggle('open')
})
