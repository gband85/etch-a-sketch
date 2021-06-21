//grab container div with variable
let container = document.querySelector(".container");
let screen = document.querySelector(".screen")
// container.style.width="800px";
function printGrid(numberOfSquares) {
//create outer loop for rows: initializer=0,condition less than 16,increment
for (let i=1; i<=numberOfSquares; i++) {
    //create inner loop for cols: initializer=0,condition less than 16,increment    
    for (let j=1; j<=numberOfSquares; j++) {
        //create div
    let div=document.createElement("div");
    //add class
    div.classList.add("square");
    //style div
    div.style.height=`${(800/numberOfSquares)-2}px`;
    div.style.width=`${(800/numberOfSquares)-2}px`;
    div.style.border="1px solid black";
   // append to container div
    screen.appendChild(div);
}
}
}
printGrid(16);
//grab all divs
let squares=document.querySelectorAll(".square");
//change color on mouseover div
squares.forEach((square) => {
    square.addEventListener('mouseover',()=>{
square.style.backgroundColor="black"
    })
})

//grab reset button
let reset=document.querySelector('.reset');
//listen for button press
reset.addEventListener('click',()=>{
//prompt for squares per side
let numSquares=prompt("How many squares per side?");
//remove existing grid
let element = document.querySelector(".screen");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
//print grid

printGrid(numSquares);
//grab all divs
let squares2=document.querySelectorAll(".square");
//change background color on mouseover
squares2.forEach((square) => {
    square.addEventListener('mouseover',()=>{
square.style.backgroundColor="black"
    })
})

})
