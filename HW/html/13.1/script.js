const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const form = document.querySelector("#form");
const list = document.querySelector("#list");

let info = JSON.parse(localStorage.getItem("list")) || [];
if (!info) {
  info = [];
}

function rendList() {
  list.textContent = "";
  info.forEach((el) => {
    const div = document.createElement("div");
    div.textContent = el;
    list.append(div);
  });
}
rendList()
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const listel = input.value;
  if (listel === "") return;

  info.push(listel);
  localStorage.setItem("list",JSON.stringify(info))
  rendList()
  input.value = ""
});


