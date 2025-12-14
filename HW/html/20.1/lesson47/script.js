const btnOpen = document.querySelector('#btnOpen')
const btnClose = document.querySelector('#btnClose')
const modal = document.querySelector('.modal')
const form = document.querySelector('#userForm')

const userInfo = JSON.parse(localStorage.getItem("userInfo")) || []

btnOpen.addEventListener('click', () => {
    modal.classList.add("modal_active")
})

btnClose.addEventListener('click', () => {
    modal.classList.remove('modal_active')
})

modal.addEventListener('click', (e) => {
    if (e.target === modal)
        modal.classList.remove('modal_active')
})

const username = document.querySelector('#username')
const phonenumber = document.querySelector('#phonenumber')
const email = document.querySelector('#email')
const company = document.querySelector('#company')
const btnSubmit = document.querySelector('#btnSubmit')

function validateData() {
    let err = []

    if (username.value.length < 2) {
        err.push("name must have min 2 symbol")
    }
    if (phonenumber.value.length < 10) {
        err.push("phonenumber must have min 10 symbols")
    }
    if (!email.value.includes("@")) {
        err.push("email must have '@'")
    }
    if (company.value.trim() === "") {
        err.push("can not be empty")
    }

    return err
}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    const errDiv = document.querySelector('#err')
    errDiv.innerHTML = ''
    const errors = validateData()

    if (errors.length > 0) {
        
        errDiv.innerHTML = errors.join("<br>")
        return 
    }

    const data = {
        username: username.value,
        phonenumber: phonenumber.value,
        email: email.value,
        company: company.value
    }

    localStorage.setItem("userInfo", JSON.stringify(data))
})