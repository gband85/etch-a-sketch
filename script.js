let container = document.querySelector(".container");
container.style.width="800px";
for (let i=1; i<=16; i++) {    
    for (let j=1; j<=16; j++) {
    let div=document.createElement("div");
    div.setAttribute("id",`div${i*j}`);
    div.style.height="48px";
    div.style.width="48px";
    div.style.border="1px solid black";
   // document.createElement("div");
    container.appendChild(div);
}
}
let divs=document.querySelectorAll("div");
divs.forEach((div) => {
    div.addEventListener('click',()=>{
div.style.backgroundColor="blue"
    })
})