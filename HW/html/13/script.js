
const item = [
    {name: 'lolly' ,price:45},
    {name: 'pen' ,price:60},
    {name: 'lolly' ,price:70}
]

function hasExpensiveItem(it) {
    return it.some((pop)=>pop.price > 50)
    
}

console.log( hasExpensiveItem(item));
