//NUMBER1
const firstName = "Vii";
const lastName = "Pleva";

const greeting = "Hello," + firstName + " " + lastName;

console.log(greeting);

//NUMBER2 


//// it doesen`t work normal with "else if "////

// let month = 12;

// if (month >= 1 && month <= 2 && month <= 12)
//     {console.log("winter");}

//     else if (month >= 3 && month <= 5)
//          {console.log("spring");} 
//     else if (month >= 6 && month <= 8)
//         {console.log("summer");} 
//     else if (month >= 9 && month <= 11)
//         {console.log("fall");} 
// else 
//     {console.log("not rigth dates");}

let  month = 12

let partOfYear;

switch( month){
    case 1:
        console.log("winter")
        break;
    case 2:
        console.log("winter")
        break;
    case 12:
        console.log("winter")
        break;

    case 3:
        console.log("spring")
        break;
    case 4:
        console.log("spring")
        break;
    case 5:
        console.log("spring")
        break;

    case 6:
        console.log("summer")
        break;
    case 7:
        console.log("summer")
        break;
    case 8:
        console.log("summer")
        break;

    case 9:
        console.log("fall")
        break;
    case 10:
        console.log("fall")
        break;
    case 11:
        console.log("fall")
        break
    default:
        console.log("not rigth number of month!")
}

//Number 3

const sentencePart1 = "I like "
const sentencePart2 = "programing !!!"
const completeSentence = sentencePart1 + sentencePart2
console.log( completeSentence);

//number 4
let dayOfWeek = 2 //can by other number

let nameOfDay;


switch(dayOfWeek){
    case 1:
        nameOfDay = "Mondey"
        break;
    case 2:
        nameOfDay = "Tuesday"
        break;
    case 3:
        nameOfDay = "Wednesday"
        break;
    case 4:
        nameOfDay = "Thursday"
        break;
    case 5:
        nameOfDay = "Friday"
        break;
    case 6:
        nameOfDay = "Saturday"
        break;
    case 7:
        nameOfDay = "Sunday"
        break;
    default:
        nameOfDay = "not right number";
    }

    console.log(nameOfDay);
