//object=>

// let student1 = {
//   firstName: "Reena",
//   lasName: "Mukhiya",
//   age: 24,
//   college: "Broadway",
//   permanentAddress: "birgunj",
//   temporaryAddress: "ktm",
//   isMarried: false,
//   isGraduated: null,
//   height: undefined,
// };
// console.log(student1);
// console.log(typeof student1);

//?CRUD
//C= create/
//R=> Read/
//U=> update/
//D=>Delete

// const courseDetails = {
//   name: "MERN",
//   duration: 90,
//   type: "Full Stack",
//   numberOfStudent: 10,
// };

//?Read Operation
//? dot operator square operator

//console.log(typeof courseDetails["name"]);

//?delete operation=>Remove specified property
//delete courseDetails.name;
// delete courseDetails["type"];
// console.log(courseDetails);

const countryDetails = {
  name: "Nepal",
  state: 7,
  population: "3cro",
  district: 77,
  localAdministration: 753,
  isRepublic: true,
  isSecular: true,
  famousPlace: "Lumbini",
};

//?Update=>update or insert
// countryDetails.name = "India";
// console.log(countryDetails);

// countryDetails.gdp = "2million";
// console.log(countryDetails);

// countryDetails["gdp"] = "2million";
// console.log(countryDetails);

const laptopDetails = {
  name: "GF75",
  ram: 16,
  brand: "MSI",
  ssd: 512,
  display: "15.3",
  graphics: "NVIDIA GEForce RTX 3060",
  battery: "51whr",
  processor: "i7 10750H",
};

//console.log(`${laptopDetails.name} has ${laptopDetails.battery} battery`);

// ?change ram size to 18 gigs
// laptopDetails.ram = "18gigs";
// console.log(laptopDetails);

// ?add another property called  memoryFrequency with 3200MHz value

// laptopDetails.memoryFrequency = "3200MHZ";
// console.log(laptopDetails);

// ? add another property called weight whose value is 3kg

// laptopDetails.weight = "3kg";
// console.log(laptopDetails);

// ? update ssd size by 300 GB
// laptopDetails.ssd = laptopDetails.ssd + 300;
// console.log(laptopDetails);

//? delete the processor
// delete laptopDetails.processor;
// console.log(laptopDetails);

//?2.Create an object named myHouseDetails and add following properties
// numberOfRooms
// numberOfMembers
// colorOfHouse
// builtYear
// numberOfStorey

const myHouseDetails = {
  numberOfRooms: 5,
  numberOfMembers: 5,
  colorOfHouse: "Blue",
  builtYear: 2065,
  numberOfStorey: 3,
};

//.Delete numberOfMembers property
// delete myHouseDetails.numberOfMembers;
// console.log(myHouseDetails);

//?B.Update numberOfRooms by new value
// myHouseDetails.numberOfRooms = 7;
// console.log(myHouseDetails);

//?  C.Add a  new property called estimatedPriceOfHouse
myHouseDetails.estimatedPriceOfHouse = 20000000;
// console.log(myHouseDetails);

//?D.Print out all properties on the console like “I have a green coloured house
//    with 9 rooms where 10 people are  living.
//?The house is 3 storey and was built in 2011 with an estimated budget of 2 crores.”

// console.log(`I have a ${myHouseDetails.colorOfHouse} coloured house with ${myHouseDetails.numberOfRooms}
// room where ${myHouseDetails.numberOfMembers} people are living.The  house is
// ${myHouseDetails.numberOfStorey} storey and built in${myHouseDetails.builtYear} with an estimated b
// budget of ${myHouseDetails.estimatedPriceOfHouse} `);

// const student = {
//   firstName: "Reena",
//   lasName: "Mukhiya",
//   age: 24,
//   college: "Broadway",
//   address: {
//     permanentAddress: "birgunj",
//     temporaryAddress: "ktm",
//   },
// };

// console.log(student.address.temporaryAddress);

//?5. hospital Details
// add field => name,location,patientCapacity, numberOfBed, numberOfBlock,
// numberOfDoctor,numberOfNurse
// delete numberOfBed and numberOfNurse
// update numberOfBlock
// add new field named numberOfAmbulance
// copy the object to new variable named newHospitalDetails
// print out results like "There is a hospital named ABC with...."

const HospitalDetails = {
  name: "ABC",
  location: "Birgunj",
  patientCapacity: 250,
  numberOfBed: 300,

  newHospitalDetails: {
    name: "Bir Hospital",
    location: "KTM",
  },

  numberOfBlock: 4,
  numberOfDoctor: 10,
  numberOfNurse: 50,
};
// delete HospitalDetails.numberOfBed;
// delete HospitalDetails.numberOfNurse;
// console.log(HospitalDetails);

// ?update numberOfBlock
// HospitalDetails.numberOfBlock = 7;
// console.log(HospitalDetails);

//?add new field named numberOfAmbulance
// HospitalDetails.numberOfAmbulance = 10;
// console.log(HospitalDetails);

//?.copy the object to new variable named newHospitalDetails
//console.log(HospitalDetails.newHospitalDetails.name);

//?. print out results like "There is a hospital named ABC with...."
//console.log(`"There is a hospital name ${HospitalDetails.name} with...."`);

//?4.Create an object named myFavoutireFood and add any three properties on it.
//?Create another object by copying this object.

const myFavoutireFood = {
  name: "Pizza",
  cuisine: "Italian",
  rating: 5,
  copiedObject: {
    name: "Burger",
    cuisine: "Italian",
    rating: 6,
  },
};

console.log(myFavoutireFood.copiedObject.rating);
