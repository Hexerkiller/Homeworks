
const images = [
    'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
    'https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
    'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400'
];

let sliderIndex = 0;

const root = document.querySelector('#root');

const frame =  document.createElement('div');
frame.classList.add('frame');

const cards = document.createElement('div');
cards.classList.add('cards');

images.forEach((imageUrl)=>{
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url(${imageUrl})`;

    cards.append(card);

})

cards.style.width = `${images.length * 500}px`;
frame.append(cards);

function updateSliderPositon(){
    cards.style.left =`${-sliderIndex * 500}px`;
    updateActiveRound()

}


function updateActiveRound() {
    const allButtons = document.querySelectorAll('.rounds button');
    allButtons.forEach((btn, idx) => {
        btn.classList.toggle('active', idx === sliderIndex);
    });
}
function createRounds (){
    const container= document.createElement('div')
    container.classList.add('rounds')

    for(let i=0;i < images.length;i++){
        const button= document.createElement("button")
        if(i === 0){
            button.classList.add('active')

        }
        

        button.addEventListener('click',()=>{
            sliderIndex = i;
            updateSliderPositon()
        })
        container.append(button);
    }
    frame.append(container);
}

createRounds()

const triggers = document.createElement('div');
triggers.classList.add('triggers');

const leftBtn = document.createElement('button');
leftBtn.innerText = '<';

const rigthBtn =document.createElement('button');
rigthBtn.innerText = '>';

triggers.append(leftBtn,rigthBtn);
frame.append(triggers);



function goLeft(){
    
    sliderIndex = (sliderIndex - 1 + images.length) % images.length;
    updateSliderPositon();
}

function goRigth(){
    
    sliderIndex = (sliderIndex + 1) % images.length;
    updateSliderPositon();
}


// function goLeft(){
//     if(sliderIndex ===0){
//         sliderIndex = images.length -1;

//     }else {
//         sliderIndex -- ;
//     }
//     updateSliderPositon()
// }

// function goRigth(){
//  if(sliderIndex ===0){
//         sliderIndex = images.length -1;

//     }else {
//         sliderIndex ++;
//     }
//     updateSliderPositon()
// }

document.addEventListener('keydown',(event)=>{

    // console.log(event.key);
    if(event.key==='ArrowLeft'){
        goLeft()
    }else if(event.key==='ArrowRight'){
        goRigth()
    }
})




leftBtn.addEventListener('click',goLeft)
rigthBtn.addEventListener('click',goRigth)


root.append(frame);

