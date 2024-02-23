const laptop1 = {
  name: "Mac air",
  brand: "apple",
  ssd: 512,
  variant: {
    color1: "grey",
    color2: "black",
  },
};
//destructure
// const {
//   name,
//   brand,
//   ssd,
//   variant: { color1, color2 },
// } = laptop1;
//console.log(name, ssd, brand);
// console.log(color1, color2);
let firstName = "Reena";
const student1 = {
  firstName: "Salon",
  lasName: "Thapa",
  address: {
    permanentAddress: "A",
    temporaryAddress: "B",
  },
};
const {
  firstName: fName, //renaming

  address: { temporaryAddress: temAdd },
} = student1;

console.log(temAdd);
console.log(fName);
console.log(firstName);
