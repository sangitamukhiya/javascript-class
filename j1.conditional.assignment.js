//2.Check if input variable is a number or not
// let input = "hello";

// if (typeof input === "number") {
//   console.log("yes it is number");
// } else {
//   console.log("No it is not number");
// }
// or;
// let x = 5;
// const type = x;
// if (typeof type === "number") {
//   console.log("yes it is number");
// } else {
//   console.log("no it is not number");
// }

//5.Perform arithmetic operation based on the option provided. Set two variables with numbers.
// Create another variable called “option” which can be add/subtract/multiply/divide/power.
//Based upon the value of the option. Perform appropriate operation.
//e.g. if option is “add”, perform num1+num2
/*
let num1 = 4;
let num2 = 3;
let option = "power";

if (option === "add") {
  console.log(num1 + num2);
} else if (option === "Subtract") {
  console.log(num1 - num2);
} else if (option === "multiply") {
  console.log(num1 * num2);
} else if (option === "divide") {
  console.log(num1 / num2);
} else if (option === "power") {
  console.log(num1 ** num2);
} else if (option === "reminder") {
  console.log(num1 % num2);
} else {
  console.log("Invalid number.");
}
*/
//6.Find grades for student marks.
// If the mark is greater than or equal to 90, the grade is “A plus”.
// If the mark is greater than or equal to 80,the grade is “A”.
//  Grade “B”  from marks greater than equal to 70.
// “C” for marks greater than equal to 60.
// “F” for marks  less than 60.
/*
let stMark = 49;

if (stMark >= 90 && stMark <= 100) {
  console.log("congratulation you have got A plus.");
} else if (stMark >= 80 && stMark <= 79) {
  console.log("congratulation  you have got A.");
} else if (stMark >= 70 && stMark <= 79) {
  console.log("your grade is B. ");
} else if (stMark >= 60 && stMark <= 69) {
  console.log("your grade is c.");
} else if (stMark < 60 && stMark <= 59) {
  console.log("Grade F");
} else {
  console.log("Try again");
}*/

let num1 = 6;
let num2 = 8;
let option = "add";

switch (option) {
  case "add": {
    console.log(num1 + num2);
    break;
  }
  case "subtract": {
    console.log(num1 - num2);
    break;
  }
  case "divide": {
    console.log(num1 / num2);
    break;
  }
  default:
    console.log("invalid number");
}
