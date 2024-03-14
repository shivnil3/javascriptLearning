userName="Nilesh"
const AGE=40; //cannot be re-declared or updated. a block scope variable. 
var surName="Awasthey" //can be re-declared and updated. a global scope variable. 
let gender="male"//cannot be re-declared or can be updated. a block scope variable. 
// primitive data type - number, string, boolean, undefined, null, bingint symbol
console.log("hello ",userName, AGE);

//non-primitive type - object
let student={
    fullName: "Rajendra Chorma",
    age: 60, 
    region: "Dubai"
}
console.log("student -", student);
console.log("student name -", student.fullName, student["fullName"]);


