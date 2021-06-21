let container = document.querySelector(".container");

for (let i=0; i<16; i++) {
    let div=document.createElement("div");
    div.style.height="25px";
    div.style.width="25px";
    div.style.border="1px solid black";
   // document.createElement("div");
    container.appendChild(div);
}