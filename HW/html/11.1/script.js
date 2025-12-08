const btn =document.querySelector('#btn')
const block = document.querySelector('#block')
const messange = document.querySelector('#messange')

let count = 0;

btn.addEventListener('click',()=>{
    count++;
    block.textContent = count;

    if (count %5===0)
    {
        const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)
        block.style.backgroundColor = `rgb(${r},${g},${b})`
    }else {
        block.style.backgroundColor = 'teal'
    }
    if (count===10){
        messange.textContent = 'поздравляем вы натапали 10 кликов'
    }
})