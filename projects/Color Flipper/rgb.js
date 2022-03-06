const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener('click', function(){
    let red = Math.floor(Math.random() * 255) +1;
    let green = Math.floor(Math.random() * 255) +1;
    let blue = Math.floor(Math.random() * 255) +1;

    let rgb = 'rgb(' + [red, green, blue].join(',') + ')';
    document.body.style.backgroundColor = rgb;
    color.textContent = rgb;
})