//?1.Write a JS code to print numbers from 0 to 10
/*
for (i = 0; i <= 10; i++) {
  console.log(i);
}*/

//?2.WAP to print the numbers from 12 to 24
/*
for (i = 12; i <= 24; i++) {
  console.log(i);
}
*/

//?3.WAP to add numbers from 1 to 10 using for loop and while loop.

//?4.Write a JavaScript for loop that iterates from 30 to 100. For each iteration,
//it checks if the current number is odd or even and displays a message on the screen.
//Sample Output :

//"1 is odd"
//"2 is even"
/*
for (i = 30; i <= 100; i++) {
  //console.log(i);
  let remainder = i % 2;
  if (remainder === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }

}*/

//?5.Write a JS code to calculate the sum of digits in a number
/*
let sum = 0;
for (i = 0; i <= 5; i++) {
  sum += i;
  console.log(sum);
}
*/
//?6.Write a JS code to print numbers from 100 to 50
/*
for (i = 100; i >= 50; i--) {
  console.log(i);
}
*/

//?.7Write a JS code to print  square of numbers from 1 to n
// let n = 7;
// for (i = 1; i <= n; i++) {
//   console.log(i * i);
// }

//?8.WAP to print product of numbers from 1 to 5

// let product = 1;
// for (i = 1; i <= 5; i++) {
//   product *= i;
//   console.log(product);
// }

// ************************* while************************************
//syntax:
//initialValue

//while(condition){
//some code here
//increment/decrement

//}

//example
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i = i + 1;
// }

//wap to print value from 20 to 10
// let i = 20;
// while (i >= 10) {
//   console.log(i);
//   i--;
// }

//Wap to print even number from 1 to 50

// let i = 1;
// while (i <= 50) {
//   let remainder = i % 2;
//   if (remainder === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
//   i++;
// }

//? prime number print

//*************************do while************************************

//initialValue
//do{
//some code here
//increment/decrement
//}while(condition)
