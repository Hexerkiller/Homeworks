const colors = ['#ff0000', '#00ff00', '#0000ff'];

function changeColor(el){
    setInterval(() => {
        const random = Math.floor(Math.random()*colors.length);
        el.style.backgroundColor = colors[random]
        
    }, 1000);


}
const box = document.createElement('div')
box.style.width = '200px'
box.style.height = "200px"

document.body.append(box)

changeColor(box)