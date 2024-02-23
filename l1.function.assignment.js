//Write a function that takes a number and prints value from 0 to that number
// (use while loop).
// function getNumber(i = 0) {
//   // i = 0;
//   while (i <= 10) {
//     console.log(i);
//     i++;
//   }
// }
//getNumber(0);

//?3.Write a function that takes “add”/“subtract”/”multiply”/”divide” and two numbers as
// parameters and perform appropriate operations.
// function findValue(num1, num2) {
//   add = num1 + num2;
//   sub = num1 - num2;
//   milt = num1 * num2;
//   div = num1 / num2;
//   console.log(add, sub, milt, div);
// }
// findValue(4, 2);

//?.4Write a function that takes day of week as parameter and returns 1,2,3,4,5,6.
//Example.. Provided sunday should return 1,monday returns 2

/*
function takeDay(day) {
  switch (day) {
    case "sunday": {
      //return 1;
      console.log(1);
      break;
    }
    case "monday": {
      //return 2;
      console.log(2);
      break;
    }
    case "Tuesday": {
      //return 2;
      console.log(3);
      break;
    }
    case "Wednesday": {
      //return 2;
      console.log(4);
      break;
    }
    case "Thursday": {
      //return 2;
      console.log(5);
      break;
    }
    case "Friday": {
      //return 2;
      console.log(6);
      break;
    }
    case "Saturday": {
      //return 2;
      console.log(7);
      break;
    }
    default:
      console.log("Invalid ");
  }
}
//console.log(takeDay("sunday"));
takeDay("Thursday");
*/

//?6.Write a function that takes a number as a parameter and returns a sum from 0 to that number.
//E.g if number is 5 then function should return 0+1+2+3+4+5=15

// function takeNumber(n) {
//   let sum = 0;
//   //let n = 5;
//   for (i = 0; i <= n; i++) {
//     sum += i;
//     console.log(sum);
//   }

// }
// takeNumber(4);

//Write a function that takes 10 numbers and calculates the average of the provided
//numbers./

//return
//WAF that converts dollars into cents.

//log=>function
//console=>

//?4. waf to convert rupee to paisa
// function convertRupeeToPaisa(rupee) {
//   const paisa = rupee * 100;
//   return paisa;
// }

// const result = convertRupeeToPaisa(20);
// console.log(result);

//?7.waf to convert celsius to fahern
//f= (9c/5)+32

function convertCelsiusToFahrenhit(c) {
  const fahrenheit = (c * 9) / 5 + 32;
  return fahrenheit;
}

let result = convertCelsiusToFahrenhit(-40);
console.log(result);
