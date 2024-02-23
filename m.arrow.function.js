// js => functions are treated as first class citizen

// arrow function
// anonymous function => function that does not have name
// () => {};

// const sayHi = (name) => {
//   console.log(`Hi ${name}`);
// };

// sayHi("Rabin");

// const getSum = (num1, num2) => {
//   let sum = num1 + num2;

//   return sum;
// };

// const result = getSum(45, 55);

// console.log(result);

// const getProduct = (x, y) => {
//   const product = x * y;

//   return product;
// };

// const result = getProduct(6, 5);
// console.log(result);

//? Write an arrow function that checks if provided number is odd or even

// const checkOddOrEven = (num) => {
//   let remainder = num % 2;

//   let result;

//   if (remainder === 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }

//   return result;
// };

// const result = checkOddOrEven(51);
// console.log(result);

//arrow function

// const getProduct = (x, y) => {
//   let product = x * y;

//   return product;
// };

// const result = getProduct(6, 5);
// console.log(result);

//?8.write a arrow function that check if  provided number is odd or even.

// const checkNumber = (num) => {
//   let remainder = num % 2;

//   let result;
//   if (remainder === 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }
//   return result;
// };

//const result = checkNumber(8);
//console.log(result);

//************************************************************** */
//pahilea normal code lekhene  then return lai remove garne
//ani tespaxi carrly bracket  hataune

// const addNumber = (num1, num2) => num1 + num2;

// const result = addNumber(10, 25);
// console.log(result);

//? write an arrow  function that prints average  af any three number

const calculateAverage = (a, b, c) => ((a + b + c) / 3).toFixed(2);

const result = calculateAverage(2, 4, 5);
console.log(result);

//?odd or even

// const checkOddOrEven = (num) => (num % 2 === 0 ? "even" : "odd");

// const result = checkOddOrEven(11);
// console.log(result);

//?9.WAF that calculates the factorial of a number.
calculateFactorial = (num) => {
  for (i = 0; i <= num; i++) {}
};
calculateFactorial();

//?. WAF that accept first name amd last name as argument  and return full name

const getFullName = (firstName, LastName) => {
  let fullName = `${firstName} ${LastName}`;

  return fullName;
};
const fullName = getFullName("Reena", "Mukhiya");
console.log(fullName);
