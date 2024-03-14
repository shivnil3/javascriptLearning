/*

Assignment details - 

Add a button through javascipt.
Set innert text of button as 'Click me'.
Set background color of button as 'red'.
Set text color of button as 'white'.
The button should appear as the first element in the body.
*/

let buttonElement = document.createElement("button");
buttonElement.innerText = "Click me";
buttonElement.style.backgroundColor = "red";
buttonElement.style.color = "white";
document.querySelector("body").prepend(buttonElement);
buttonElement.onclick=function() {
    alert("Hello! I am an alert box!!");    
};


