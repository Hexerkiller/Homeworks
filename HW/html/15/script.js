const btn = document.querySelector('#btn')
const container = document.querySelector('#user-info')

btn.addEventListener('click',()=>{

    container.innerHTML = ''

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(users=>{
        users.forEach(user =>{
        const card = document.createElement('div')
        card.classList.add('user-card');

        card.innerHTML = `
        <h3>${user.username} ID : ${user.id}</h3>
        <p> Email : ${user.email}</p>
        <p> City : ${user.address.city}</p>
        <p> Phone : ${user.phone}</p>
        <p> Company: ${user.company.name}</p>
        `;
        container.append(card)
    })
})
.catch(err=>{
    console.log('Error', err );
    container.textContent = 'Не удалось загрузить пользователей.';
    })
    
})