//?filter=>filters out values from array based upon condition

//?return array

// const numList = [10, 12, -24, -25, 13, -40];
// let newNumList = numList.filter((item, index, self) => {
//   return item > 0;
// });
// console.log(newNumList)

// const scoreList = [25, 26, 78, 79, 35, 45, 47, 55];
// get an array with even scores

// let newScore = scoreList.filter((item, index, self) => {
//   remainder = item % 2;
//   if (remainder === 0) {
//     return item;
//   }
// });
// console.log(newScore);

//*********** */

let laptopList = [
  {
    name: "TUF F15",
    brand: "asus",
    price: 1044,
  },
  {
    name: "GF63",
    brand: "msi",
    price: 900,
  },
  {
    name: "macbook air m2",
    brand: "apple",
    price: 1400,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 800,
  },

  {
    name: "inspiron 55",
    brand: "dell",
    price: 700,
  },
];

//?due to sudden rise in tax, add 10% to the price of each laptop

// let newLaptopList = laptopList.map((item, index, self) => {
// //  item.price = item.price + (10 / 100) * item.price;
// //  return item;

// newPrice = item.price + (10 / 100) * item.price;

// let newItem = { ...item, price: newPrice };
// return newItem;
//});
//console.log(newLaptopList);

// ? decrease price of each laptop by 20 percent
// let newLaptopList = laptopList.map((item, index, self) => {
//   // item.price = item.price - (20 / 100) * item.price;
//   //  return item;

//   newPrice = item.price - (20 / 100) * item.price;
//   let newItem = { ...item, price: newPrice };
//   return newItem;
// });
// console.log(newLaptopList);

// ? remove laptops whose price is greater than 1000
// let newLaptopList = laptopList.filter((item, index, self) => {
//   if (item.price <= 1000) {
//     return item;
//   }
// });
// console.log(newLaptopList);

// ? remove laptops whose brand is apple

// const newLaptopList = laptopList.filter((item, index, self) => {
//   if (item.brand !== "apple") {
//     return item;
//   }
// });
// console.log(newLaptopList);

// ? increase price of asus laptop by 5%

let newLaptopList = laptopList.map((item, index, self) => {
  if (item.brand === "asus") {
    newPrice = item.price + (5 / 100) * item.price;
    newItem = { ...item, price: newPrice };
    return newItem;
  }
  return item;
});
console.log(newLaptopList);
