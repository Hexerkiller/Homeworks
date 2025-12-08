let i = 2; // любое число
let r = Number.isInteger(i);
if (r === true) {
  if (i > 0 && i < 60) {
    console.log("F");
  } else if (i >= 60 && i <= 69) {
    console.log("D");
  } else if (i >= 70 && i <= 79) {
    console.log("C");
  } else if (i >= 80 && i <= 89) {
    console.log("B");
  } else if (i >= 90 && i <= 100) {
    console.log("A");
  } else {
    console.log("not rigth nubmer");
  }
} else {
  console.log("is  not integer");
}
// интерсное заданние пришлось поискать команду 'Number.isInteger' и что она делает класно !!!

let dayOfWeek = 1

switch (dayOfWeek)  {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Thusday");
         break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
        
    default:
        console.log("it`s not rigth number");
        
        break;
}