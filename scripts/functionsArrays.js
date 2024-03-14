//Functions
function myFunction(name, age){
    console.log("hello from function to ",name, age);
}

myFunction("Nilendra",45);

function suma(x,y){
    s=x+y;
    return s;
}

let val=suma(5,6);
console.log(val);

//Arrow functions
const arrowSum=(a,b)=>{
    return a+b;
}
console.log(arrowSum(3,5));

//when a function is coupled/associated/bind to an object, it is called as method
// for ex. toUpperCase is method is coupled to a string variables. |
console.log("nilesh".toUpperCase());

let arr=[1, 2, 3, 4, 5];
//here the function printVal is passed as an argument to forEach method. function passed 
// as argument are also referred as callback functions.
arr.forEach(function printVal(val){
    console.log(val)
});

let cities=["pune", "delhi","kolkata"];
//here the function printVal is passed as an argument to forEach method. function passed 
// as argument are also referred as callback functions.
cities.forEach(function printVal(val){
    console.log(val.toUpperCase())
});

// higher order function - which takes another function as an argument or can return a function
// in the above example, forEach is an higher order function takes the callback function i.e. printVal()
// as an argument. 

let numArr=[3,5,2,1];
numArr.forEach(function squareOfNumber(val){
    console.log("square of num",val*val);
}

)

// map() method used on arrays
// create a new array with the result of some operation. The vlaue its callback returns are used to form new array. 
let newArr=numArr.map((val)=>{
    return val*2;
}
);
console.log("Multiplied num array -",newArr);

//filter method, returns an array based on the applied filter
let filteredArr=numArr.filter((val)=>{
    return val%2;
}
);
console.log("Filtered num array -",filteredArr);


//reduce method
//performs some operations and reduces the array to a single value. It returns that single value. 
const sumArr=numArr.reduce((result,val)=>{
    return result+val;
})
console.log("sum of number array-",sumArr);
