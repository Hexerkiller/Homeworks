const list = document.querySelector('#list')

if (list.children.length < 6){

    list.lastElementChild.remove();
const newElem = document.createElement('li')
newElem.textContent = "new elem"
list.append(newElem)

}