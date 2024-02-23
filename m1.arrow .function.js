//?1.Write a function that checks if the provided number is odd or even.
/*
const checkNumber = (num) => {
  let remainder = num % 2;

  let result;
  if (remainder === 0) {
    result = "even";
  } else {
    result = "odd";
  }
  return result;
};
//mathi ko result ani tala ko result same hoina
const result = checkNumber(59);
console.log(result);
*/

//?2Write a function that takes a number and
//prints value from 0 to that number (use while loop).
/*
const printNumber = (n) => {
  for (i = 0; i <= n; i++) {
    console.log(i);
  }
};

const result = printNumber(10);
console.log(result);
*/

//?3.Write a function that takes “add”/“subtract”/”multiply”/”divide” and
// two numbers as parameters and perform appropriate operations.

const calculateNumber = (operation, num1, num2) => {
  let result;

  switch (operation) {
    case "add": {
      result = num1 + num2;
      break;
    }
    case "subtract": {
      result = num1 - num2;
      break;
    }
    case "divide": {
      result = num1 / num2;
      break;
    }
    case "multiply": {
      result = num1 * num2;
      break;
    }
    default:
      result = "Invalid";
  }
  return result;
};

const result = calculateNumber("multiply", 6, 5);
console.log(result);

//?4Write a function that takes day of week as parameter and returns 1,2,3,4,5,6.
//Example.. Provided sunday should return 1,monday returns 2
/*
takeDayOfWeek = (day) => {
  switch (day) {
    case "Sunday": {
      return 1;
    }
    case "Monday": {
      return 2;
    }
    case "Tuesday": {
      return 3;
    }
    case "Wednesday": {
      return 4;
    }
    case "Thursday": {
      return 5;
    }
    case "Friday": {
      return 6;
    }
    case "Saturday": {
      return 7;
    }
    default: {
      return "Invalid day";
    }
  }
};

const result = takeDayOfWeek("Monday");
console.log(result);
*/

//?5.Write a function that takes 10 numbers and calculates the average of the provided numbers.
/*
const calculateAverage = (a, b, c, d, e) => {
  let avg = (a + b + c + d + e) / 5;
  return avg;
};
const result = calculateAverage(10, 20, 30, 10, 10);
console.log(result);
*/

//?6.Write a function that takes a number as a parameter and returns a sum from 0 to
//that number.
// E.g if number is 5 then function should return 0+1+2+3+4+5=15
/*
const calculateSum = (n) => {
  let sum = 0;
  for (i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};
const result = calculateSum(5);
console.log(result);
*/

//?7.WAF that converts dollars into cents.
/*
const convertDollarToCents = (dollar) => {
  let cents = dollar * 100;
  return cents;
};
const result = convertDollarToCents(50);
console.log(result);
*/

//?8.WAF that converts temperature in Celsius into Fahrenheit.
/*
const convertCelsiusToFahrenheit = (celsius) => {
  let fahrenheit = (9 * celsius) / 5 + 32;
  return fahrenheit;
};
const result = convertCelsiusToFahrenheit(-32);
console.log(result);
*/

//?9.WAF that calculates the factorial of a number.

// const calculateFactorial = (n) => {
//   let factorial = 1;

//   for (i = 1; i <= n; i++) {
//     factorial *= i; //x=x*i
//   }
//   return factorial;
// };

// const result = calculateFactorial(6);
// console.log(result);

//?10. WAF that calculates the given number is prime or not.
/*
const calculatePrime = (num) => {
  for (i = 1; i <= num; i++) {
    let remainder = num % i;
    if (remainder === 0) {
      return "not prime";
    } else {
      return " prime";
    }
  }
};
*/

//const result = calculatePrime(11);
//console.log(result);
