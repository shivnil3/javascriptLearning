let divVar=document.querySelector("div");
let paraVar=document.querySelector("para");
console.log("div id - ",divVar.getAttribute("id"));
console.log("para class - ",paraVar.getAttribute("class"));
paraVar.setAttribute("class","updatedClass");
console.log("para updated class - ",paraVar.getAttribute("class"));
divVar.style.background="yellow"

// Add a new/delete element through the script
let newPara=document.createElement("para");
newPara.innerText="Adding more info."
let newBtn=document.createElement("button");
newBtn.innerText="button added using JS"
//appends the string
paraVar.append(newPara);
paraVar.after(newBtn);
//appends the object
newBtn.appendChild(newPara);
