const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    
    const randomNumber = Math.floor(Math.random()*3+1);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    btn.style.color = "white";
    btn.style.borderColor = "white";


})

