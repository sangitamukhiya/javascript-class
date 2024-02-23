//?1.Create an array called friendsList and add your friends name.
//?Print out your friend's name one by one.

// const friendsList = ["Ram", "Roshan", "Pintu", "Rahul"];
// friendsList.map((item, index, self) => {
//   console.log(item);
// });

//?2.Create an array called favourite sportsPerson
//?and use a for loop to print the player's name.

// const SportsPersons = ["Jitendra ", "Sandeep ", "Basant ", "Sagar Pun"];

// SportsPersons.forEach((item, index, self) => {
//   console.log(item);
// });

//?3.Create an array called myFavourite actors and print out
//? who is your best actor among all actors.

// const myFavouriteActors = ["Amitabh", "Shah Rukh", "Ajay", "Akshay", "Ranbir"];

// myFavouriteActors.filter((item, index, self) => {
//   if (item === "Amitabh") {
//     console.log(`${item} is my fav actor.`);
//   } //else {
//   console.log(`${item} is not my fav actor.`);
// }
// });

//?4.Make an array of numbers that double the items.

// const ArrayOfNumber = [1, 2, 3, 4, 5];

// const newArray = ArrayOfNumber.map((item, index, self) => {
//   newItem = item * 2;
//   return newItem;
// });
// console.log(newArray);

//?5.Make an array of numbers and print whether the numbers are odd or even.

const checkOddEven = (num) => {
  let remainder = num % 2;

  let result;

  if (remainder === 0) {
    result = "Even";
  } else {
    result = "odd";
  }
  return result;
};

const number = [12, 13, 14, 15, 3];

number.forEach((item, index, self) => {
  const result = checkOddEven(item);

  console.log(`${item} is ${result}`);
});
