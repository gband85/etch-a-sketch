//grab container div with variable
let container = document.querySelector(".container");
container.style.width="800px";
//create outer loop for rows: initializer=0,condition less than 16,increment
for (let i=1; i<=16; i++) {
    //create inner loop for cols: initializer=0,condition less than 16,increment    
    for (let j=1; j<=16; j++) {
        //create div
    let div=document.createElement("div");
    //add class
    div.classList.add("square");
    //style div
    div.style.height="48px";
    div.style.width="48px";
    div.style.border="1px solid black";
   // append to container div
    container.appendChild(div);
}
}
//grab all divs
let squares=document.querySelectorAll(".square");
//change color on mouseover div
squares.forEach((square) => {
    square.addEventListener('mouseover',()=>{
square.style.backgroundColor="black"
    })
})