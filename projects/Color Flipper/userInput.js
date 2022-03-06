const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value;
    console.log(r, g, b);
    let rgb = 'rgb(' + [r, g, b].join(",") + ')';
    document.body.style.backgroundColor = rgb;
    
})