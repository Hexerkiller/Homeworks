const block = document.querySelector(".block");
block.addEventListener("mouseenter", () => {
  block.style.backgroundColor = "black";
});
block.addEventListener("mouseleave", () => {
  block.style.backgroundColor = "blue";
});


const colorBlock = document.querySelector("#colorBlock");

const colorButton = document.querySelector("#colorButton");

colorButton.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 256);

  const g = Math.floor(Math.random() * 256);

  const b = Math.floor(Math.random() * 256);
  colorBlock.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
