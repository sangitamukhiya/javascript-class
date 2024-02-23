// let x = "5";
// let y = 5;
// console.log(x === y);
// console.log(x == y);

// let a = 5;
// let b = 10;
// console.log(a != b);

// let c = 100;
// let d = 10;
// console.log(c > d);

// let e = 100;
// let f = 100;
// console.log(e > f);
// console.log(e >= f);

//logical operrator
//or (+)kunai euta true vayo vane result true
// And (*)gate ma all should ba true hunu parxa

let a = 2;
let b = -3;
let c = 5;
let d = 10;

let e = 9;

let firstCondition = a > b;
let secondCondition = c <= d;
//console.log(firstCondition && secondCondition);

let thirdCondition = a + b < c;
let fourthCondition = d * a >= c;
//console.log(thirdCondition || fourthCondition);//true

let condition = a ** c === d;
let condition1 = d === e + a - 1;
let condition3 = d % e !== 1;
//console.log((condition && condition1) || condition3); //false

let condition4 = 2 ** a + b > d; // false
let condition5 = c - d > b;
//console.log(condition4 || condition5);//false
