//?hof=> higher order function

//

//?callback function=>function which is passed as an argument to another function

//? map,filter,find

// const getSum = (x, y, printValue) => {
//   let sum = x + y;
//   printValue(sum);

//call backFunction bcz it was pass as an argument
// };

// const printValue = (value) => {
//   console.log(value);
// };

// getSum(2, 3, printValue);

//?1. function retuurn function

//getSum is a hof
// const getSum = (x, y) => {
//   const calculateSum = () => {
//     let sum = x + y;
//     return sum;
//   };
//   return calculateSum; //function return  vairaxa
// };

// // const fun = getSum(10, 20);

// // const result = fun();

// const result = getSum(20, 30)();

// console.log(result);
