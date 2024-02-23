//array

// const studentList = ["Ram", "Rina", "Roahan"];
// console.log(studentList);
// console.log(typeof studentList);

// const randomArray = [1, "ram", true, undefined];
// console.log(randomArray);

const scoreList = [45, 55, 35, 65, 75];
//we can access value in array using index
//index always start from zero

// console.log(scoreList[0]);
//?array length =>total number of items in array

// console.log(scoreList.length);

//?

// const carBrand = ["Honda", "Toyota", "BYD", "Tesla", "Hyundai", "Tata"];

// //  for (let i = 0; i <= 5; i++)
// for (let i = 0; i <= carBrand.length - 1; i++) {
//   console.log(carBrand[i]);
// }

//let studentList = ["Prithvi"];
// ? push=>add element to end of the array
// studentList.push("Arun");

// studentList.push("Rina", "Sona");
//console.log(studentList);

//?pop=>remove last item from array
// studentList.pop();
// console.log(studentList);

//?unshift
// let studentList = ["Prithvi"];
// studentList.unshift("Manish");
// console.log(studentList);

//?shift

// studentList.shift();
// console.log(studentList);

//?map

// let score = [25, 35, 45, 55, 65, 75];
// score.map((item, index, self) => {
//   //console.log(item, index,self);
// });

// const scores = [25, 35, 45, 55, 65, 75];
// const newScore = scores.map((item, index) => {
//   let newScore = item - 10;
//   return newScore;
// });
// console.log(newScore);

//? map => is used to change

// const marks = [30, 42, 55, 72, 91];

// const newMarkList = marks.map((item, index) => item - 10);
// console.log(newMarkList);

//const nameList = ["Suman", "Prabeen", "Enish", "Nischal"];

// nameList.map((item, index, self) => {
//   let newList = item.toLowerCase();
//   console.log(newList);
// });

// let newNameList = nameList.map((item, index, self) => {
//   let newList = item.toLowerCase();
//   return newList;
// });
// console.log(newNameList);

const nameList = ["Suman", "Prabeen", "Enish", "Nischal"];

let newNameList = nameList.map((item, index, self) => {
  if (item === "Enish") {
    return item;
  }
  let newList = item.toLowerCase();
  return newList;
});
console.log(newNameList);
