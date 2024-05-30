let btn = document.querySelector("button");
let h3=document.querySelector("h3");
let div = document.querySelector("div");
btn.addEventListener("click", function(){
  let name=color();
  h3.innerText=name;
  div.style.backgroundColor=name;  
});

function color(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}