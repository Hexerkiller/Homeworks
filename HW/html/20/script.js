

const autos= ['toyota','BMW','Ford','Mercedes-Benz','Nissan']


function createList (arr){
    const ul =document.createElement('ul')

    arr.forEach(auto => {
        const li = document.createElement('li')
        li.textContent = auto+''
        

        const btn = document.createElement('button')
        btn.textContent ='delete'
        btn.style.marginLeft = "20px"

        btn.addEventListener('click',()=>{
            li.remove()
        })

        li.append(btn)
        ul.append(li)
    });
    document.body.append(ul)

}
createList(autos)



