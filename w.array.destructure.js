//array destructure

// const [num1, num2, num3] = [22, 31, 33];

// console.log(num1, num2, num3);

//?.const firstName=["Reena","Mukhiya"]

// const [fName, lName] = ["Reena", "Mukhiya"];

// console.log(fName, lName);

// ? structuredClone
// ? when array has objects or array inside

const studentData = [{ name: "A" }, { name: "B" }];

const newStudentData = structuredClone(studentData);

newStudentData[0].name = "Z";
console.log(studentData);
