
function num (num1,num2 = 0) {
    return num1 + num2;
}
console.log(num(5,5));
console.log(num(3));

let numbers = [ 6,78,5,46,7,3,7,2]

function calculateSum(mas) {
    let sum = 0 ;
    for (let i = 0; i < mas.length; i++) {
        sum = sum + mas[i];
        
    }
    return sum;
}
console.log(calculateSum(numbers));

let info = [
    {name: "riko",age:21,curs:2},
   {name: "miki",age:20,curs:1},
   {name: "lola",age:24,curs:4}
]
function displayStudentInfo(info) {
    console.log(`Name: ${info.name}`);
    console.log(`Age: ${info.age}`);
    console.log(`Curs: ${info.curs}`);
    console.log(`   ***  `);
    
    
}
for (let i = 0; i < info.length; i++) {
    displayStudentInfo(info[i])
    
    
}