//NUM 1

const num = [1, 5, 5, 6, 48, 843, 31];
console.log(num);

//NUM2

const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 8 && arr[i] < 20) {
    console.log(arr[i]);
  }
}

// NUM3

const pop = [6, 5, 45, 87, 2, 632, 92, 10];
let min = pop[0];

for (let i = 0; i < pop.length; i++) {
  if (pop[i] < min) {
    min = pop[i];
  }
}
console.log(min);

//NUM4

const nums = [5, 6, 8, 10, 88, 79, 64, 31, 65];
let cop = [...nums];
cop[2] = 18;
console.log(cop);

//NUM5

const names = ["lily", "emi", "toni", "dos", "jannyfer"];
let mxLen = names[0];
for (let i = 0; i < names.length; i++) {
  if (names[i].length > mxLen.length) {
    mxLen = names[i];
  }
}
console.log(mxLen);
