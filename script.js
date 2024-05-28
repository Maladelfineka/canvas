function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
     

let canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
var punkty = document.querySelector('.punkty-js');

var live = document.querySelector('.live-js');
let startowaLiczbaLive = 3;
var liveLiczba = startowaLiczbaLive;
console.log(live)
let punktyWygrana = 20;

var punktyLiczba = 0;
punkty.innerHTML = punktyLiczba;


var rectX = 0;
var rectY = 0;
var rectWidth = 50;
var rectHeight = 50;
var speed = 50;

var szerokosc_1 = getRandomInt (24)*50;
var wysokosc_1 = getRandomInt (13)*50;

var szerokosc_2 = getRandomInt (24)*50;
var wysokosc_2 = getRandomInt (13)*50;

var pierwszy_pkt = false;
var drugi_pkt = false;






function drawRect() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!pierwszy_pkt){
        ctx.fillStyle = "green"; 
        ctx.fillRect(szerokosc_1, wysokosc_1, rectWidth, rectHeight);
    }
    if (!drugi_pkt){
        ctx.fillStyle = "red"; 
        ctx.fillRect(szerokosc_2, wysokosc_2, rectWidth +100, rectHeight+150);
    }
    ctx.fillStyle = "blue"; 
    ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

    

    // link.onload = function(){

    //     ctx.drawImage(link, rectX, rectY, rectWidth, rectHeight);

    // }

}




function checkBounds() {

    if (rectX < 0) rectX = 0;
    if (rectX + rectWidth > canvas.width) rectX = canvas.width - rectWidth;
    if (rectY < 0) rectY = 0;
    if (rectY + rectHeight > canvas.height) rectY = canvas.height - rectHeight;

}


function checkPunkty(){

    if( rectX == szerokosc_1  && rectY==wysokosc_1 && !pierwszy_pkt){

        console.log("Punkt");
        
        punktyLiczba++;
        punkty.innerHTML = punktyLiczba;
        // pierwszy_pkt = true;
        szerokosc_1 = getRandomInt (24)*50;
        wysokosc_1 = getRandomInt (13)*50;
        console.log(wysokosc_1,szerokosc_1)



    }else if (rectX == szerokosc_2 && rectY == wysokosc_2 && !drugi_pkt){

        console.log("Punkt");

        liveLiczba --;

        live.innerHTML = liveLiczba;
        // drugi_pkt = true;
        szerokosc_2 = getRandomInt (24)*50;
        wysokosc_2 = getRandomInt (13)*50;
        console.log(wysokosc_2,szerokosc_2)



    }

}

function checkWygrana(){
    if (punktyLiczba === punktyWygrana){
        ctx.clearRect(0,0,canvas.width, canvas.height)

        ctx.font = '100px Arial'
        ctx.fillStyle = 'green'

        var text = "Wygrana"
        var x = (canvas.width / 2) - (ctx.measureText(text).width/2)
        var y = canvas.height /2;
        ctx.fillText(text, x,y)
    }
}

function checkPrzegrana(){
    if (liveLiczba === 0){
        ctx.clearRect(0,0,canvas.width, canvas.height)

        ctx.font = '100px Arial'
        ctx.fillStyle = 'red'

        var text = "Przegrana"
        var x = (canvas.width / 2) - (ctx.measureText(text).width/2)
        var y = canvas.height /2;
        ctx.fillText(text, x,y)
    }
}



window.addEventListener('keydown', function (event) {

    switch (event.key) {

        case 'ArrowLeft':
            rectX -= speed;
            break;
        case 'ArrowRight':
            rectX += speed;
            break;
        case 'ArrowUp':
            rectY -= speed;
            break;
        case 'ArrowDown':
            rectY += speed;
            break;

    }

    checkBounds(); 
    checkPunkty();
    checkPrzegrana();
    checkWygrana();
if(punktyLiczba=== punktyWygrana || liveLiczba ===0){

}else{
    drawRect(); 
}
    

    

});




// drawRect();






// var link = new Image();

// link.src = './link.jpg';


// link.onload = function(){

//     ctx.drawImage(link, 50, 50);

// }

drawRect();
// 262 12