const laptop1 = {
  name: "Mack book pro",
  brand: "Apple",
  model: 2023,
  storage: {
    ram: 18,
    ssd: 512,
  },
};

//copy by value , copy by reference
const laptop2 = laptop1;
// console.log(laptop2);

laptop2.name = "Asus tuf";
console.log(laptop1);

//?spread operator
// const laptop2 = { ...laptop1 };
// laptop2.name = "HP";
// laptop2.storage.ram = 8;
// console.log(laptop2);

//?structureClone (deepcopy)

// const laptop2 = structuredClone(laptop1);
// laptop2.name = "A";
// laptop2.storage.ssd = 1500;
// console.log(laptop2);
