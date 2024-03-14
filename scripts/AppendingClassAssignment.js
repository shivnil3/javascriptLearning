//Create a <p> tag in html, give it a class and some styling.
//Now create a new class in CSS and try to append this class to the <p> element.
//Did u notice, how you overrite the class when you you add a new one? Solve this problem using classLst.
let paraElement=document.querySelector("p");
let paraClass=paraElement.getAttribute("class");
console.log(paraClass);
paraElement.classList.add("newClass");