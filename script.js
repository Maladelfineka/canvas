console.log("test");
let canva = document.querySelector("#canvas");


let ctx = canva.getContext('2d');
ctx.fillStyle = "black";
ctx.fillRect(50,5,250,400);
console.log(canva);


ctx.fillStyle = "grey";
ctx.fillRect(65,40,200,200);


ctx.beginPath();
ctx.fillStyle = "#C7C7C7";
ctx.arc(500,300, 60,0 , Math.PI*2);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#CECECE";
ctx.arc(500,200, 50,0 , Math.PI*2);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#DFDEDE";
ctx.arc(500,130, 40,0 , Math.PI*2);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(470,120, 6,0 , Math.PI*2);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(500,120, 6,0 , Math.PI*2);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "grey";
ctx.fillRect(1,100000, 10,0 , Math.PI*2);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "lightblue";
ctx.arc(700,120, 60,0 , Math.PI*2);
ctx.fill();
ctx.closePath();
