// find=> return the first matching item based on condition
// const scores = [2, 4, 5, 7, 8, 9, 11, 23, 99, 101, 111, 16];

// const newScores = scores.filter((item, index, self) => {
//   if (item > 15) {
//     return item;
//   }
// });

// console.log(newScores);

// const students = ["Suresh", "Kamal", "Laxman"];

// const requiredStudent = students.find((item) => {
//   if (item === "Kamalesh") {
//     return item;
//   }
// });

// console.log(requiredStudent);

// const newStudents = students.map((item) => {
//   if (item === "Kamal") {
//     return "Rajan";
//   } else {
//     return item;
//   }
// });

// console.log(newStudents);

// ?push,pop, map, filter,find
const nations = ["Nepal", "China", "India"];
nations.push("Thailand");

// nations.pop();
console.log(nations);

//? map=> change array content

//const price = [100, 150, 177, 95, 66];
// const newPrice = price.map((item, index, self) => {
//   let newItem = item - 20;
//   return newItem;
// });
// console.log(newPrice);

// const newPrice = price.map((item, index, self) => {

//   if (item === 150) {
//     let newItem = item + 100;
//     return newItem;
//   }
//   return item;
// });
// console.log(newPrice);

// const studentData = [
//   {
//     name: "A",
//     score: 85,
//   },
//   {
//     name: "B",
//     score: 91,
//   },
//   {
//     name: "C",
//     score: 75,
//   },
// ];

// const newData = studentData.map((item, index, self) => {
//   let newScore = item.score + 5;
//   let newItem = { ...item, score: item.score + 5 };
//let newItem = { ...item, score: newScore };

//we can use both method

//   return newItem;
// });
// console.log(newData);

//?filter

const studentData = [
  {
    name: "A",
    score: 85,
  },
  {
    name: "B",
    score: 91,
  },
  {
    name: "C",
    score: 75,
  },
];

// const newData = studentData.filter((item, index, self) => {
//   if (item.score > 80) {
//     return item;
//   }
// });
// console.log(newData);

//?find

// const newData = studentData.find((item, index, self) => {
//   if (item.score > 80) {
//     return item;
//   }
// });
// console.log(newData);

//?=>sort
// const nameList = [
//   "Nepal",
//   "India",
//   "China",
//   "Bhutan",
//   "America",
//   "Zimbabwe",
//   "Australia",
//   "Argentina",
// ];
// nameList.sort();

// console.log(nameList);

// const nums = [1, 25, 100, 125, 22, 266, 277, 11111];

// nums.sort((a, b) => {
//   return b - a;
// });
// console.log(nums);

const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const newWords = words.filter((item, index, self) => {
//   if (item.length > 6) {
//     return item;
//   }
// });
// console.log(newWords);

// const newWords = words.filter((item, index, self) =>

//      item.length>6;

// );
// console.log(newWords);

//******************************************************************* */

//?.reduce

//calculate total scores

// const scores = [45, 55, 65, 72];

// const newValue = scores.reduce((sum, item, index, self) => {
//   sum = sum + item;
//   return sum;
// }, 0);
// console.log(newValue);

// let values = [10, 25, 35, 5];
// calculate total value by multiplying each other

// const newValue = values.reduce((product, item, index, self) => {
//   product = product * item;
//   return product;
// }, 1);

// console.log(newValue);

// let product = 1;
// values.map(() => {});
