const register = document.querySelector("#register");
const massenge = document.querySelector("#massenge");
const regBtn = document.querySelector("#btnregistr");
const logBtn = document.querySelector("#loginbtn");

let infoAbout = JSON.parse(localStorage.getItem("info")) || [];

if (infoAbout) {
}

function onlyLetter(name) {
  if (name.length < 2 || name.length > 24) return false;

    for (let i = 0; i < name.length; i++) {
        const c = name[i].toLowerCase();
        if (c < 'a' || c > 'z') {
            return false; 
        }
    }

    return true;
}

function valName(name) {
  if (!onlyLetter(name)) {
    
    return false;
  }
  return true;
}

function valEmail (email){
  return email.includes('@')  && email.length >= 7
}

function valtelefon (telefon){
  
   
    if (telefon[0] !== '+') return false;

    
    if (telefon.length < 8 || telefon.length > 13) return false;

  
    for (let i = 1; i < telefon.length; i++) {
        if (telefon[i] < '0' || telefon[i] > '9') {
            return false; 
        }
    }

    return true;
}

function valPassword (password){
if (password.length < 5 || password.length>26){
  return false;
}
return true
}


regBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const name = register.querySelector("#username").value;
  const telefon = register.querySelector("#telefon").value;
  const email = register.querySelector("#email").value;
  const password = register.querySelector("#password").value;

 if (!valName(name)) {
  massenge.textContent =
      "Имя должно содержать только буквы и быть длиной 2-24 символа";
    return;
  }

  if (!valEmail(email)){
    massenge.textContent = "Email должен содержать '@' и быть не менее 7 символов";
  return;
  }

  if (!valtelefon(telefon)){
    massenge.textContent = "Телефон должен начинаться c '+' и содержать 8-12 цифр";
  return;
  }
  

  if (!valPassword(password)){
    massenge.textContent = 'Пароль дожен быть длиной 5-26 символа'
   return ;
  }
  if (!name || !telefon || !email || !password) {
    massenge.textContent = "Заполните все поля!";
    return;
  }

 

  infoAbout.push({ name, telefon, email, password });
  localStorage.setItem("info", JSON.stringify(infoAbout));
  massenge.textContent = "registred sucssefuly";
  register.reset();
});

logBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const loginemail = register.querySelector("#loginemail").value;
  const loginpassword = register.querySelector("#loginpassword").value;

  if (!loginemail || !loginpassword) {
    massenge.textContent = "Заполните поля логина!";
    return;
  }

  const users = JSON.parse(localStorage.getItem("info")) || [];
  const user = users.find(
    (u) => u.email === loginemail && u.password === loginpassword
  );

  if (user) {
    massenge.textContent = `Вхід успішний! Привіт, ${user.name}!`;
  } else {
    massenge.textContent = "Невірний email або пароль.";
  }

  register.querySelector("#loginemail").value = "";
  register.querySelector("#loginpassword").value = "";
});
