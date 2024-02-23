// conditionals
// execution => sequential

// console.log("Hello");

// let sum = 2 + 3;

// if (false) {
//   console.log(sum);
// }

// console.log("Hi");

//? if
// syntax
// if (condition) {
// some code here
// }

// let x = 21;
// let y = 3;

// mathi ko condittion true vayo vane run hunxa otherwise run hudaina

// if (x > y) {
//   console.log("Hello mom");
//   console.log("Hello dad");
//   console.log("Hi bro");
// }

//?.if ... else
//syntax:if(condition){

//}else{

//}

// let isPass = true;
// if (isPass) {
//   console.log("congratulation you have passed");
// } else {
//   console.log("please try again");
// }

//check if a number is odd or even
// let num = 60;
// let remainder = num % 2;

// if (remainder === 0) {
//   console.log(" Even");
// } else {
//   console.log("Odd");
// }

//? if ..else if ...else
//syntax:
// if (condition1){

// }
// else if(condition2){

// }
// else{

// }

// let num = -7;
// if (num < 0) {
//   console.log("Negative number");
// } else if (num > 0) {
//   console.log("Positive number");
// } else {
//   console.log("Zero");
// }

// let x = 125;
// let y = 125;
// if (x > y) {
//   console.log("x is greater. ");
// } else if (x < y) {
//   console.log("y is greater.");
// } else {
//   console.log("Both are equal");
// }

/*
let x = 6;
let y = 8;
let z = 4;
if (x > y && x > z) {
  console.log(" x is greater than y and z");
} else if (y > x && y > z) {
  console.log(" y is greater than x and z");
} else {
  console.log(" z is greater ");
}
*/

//****************switch case use in multiple choice************************
/*
let day = 3;

switch (day) {
  case 1: {
    console.log("sunday");
    break;
  }
  case 2: {
    console.log("Monday");
    break;
  }
  case 3: {
    console.log("Tuesday");
    break;
  }

  case 4: {
    console.log("Wednesday");
    break;
  }
  case 5: {
    console.log("Thursday");
    break;
  }
  case 6: {
    console.log("Friday");
    break;
  }
  case 7: {
    console.log("saturday");
    break;
  }
  default:
    console.log("Invalid day");
}*/
/*
let num = 5;
let reminder = num % 2;

switch (reminder) {
  case 0: {
    console.log(`${num} is even`);
    break;
  }
  case 1: {
    console.log(`${num} is odd`);
    break;
  }
  default:
    console.log("invalid");
}
*/

//?.**********ternary*****************
//=== comparision ko lagi hunuxa so we use tripal equal to

// let num = 5;
// let remainder = num % 2;
// remainder === 0 ? console.log("Even") : console.log("Odd");

let num1 = 10;
let num2 = 6;
let result = num1 >= num2;
result ? console.log("greater") : console.log("smaller");
