

let num =[5,764,7,3,2]

function multiply(mas) {
    let res = 1
    for (let i = 0; i < mas.length; i++) {
       res *= mas[i]
        
    }
    return res
}
console.log(multiply(num));

let nums = [ 2,3,4,5,6,7,2]
let sums = 0;
let i =0;
while (i < nums.length) {
    sums = sums + nums[i]
    i++
}
console.log(`Sum of elements =${sums}`);
