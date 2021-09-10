// DT173G moment 2, Alice Fagerberg

console.log("Hello from btndynamics.js");

let body = document.getElementsByTagName("BODY")[0];
let blueBtn = document.getElementById("bluebtn");
let redBtn = document.getElementById("redbtn");
let yellowBtn = document.getElementById("yellowbtn");
let text = document.getElementById("text");

let blueImg = document.getElementById("blue");
let redImg = document.getElementById("red");

blueBtn.addEventListener("click", changeBlue);
redBtn.addEventListener("click", changeRed);
yellowBtn.addEventListener("click", justYellow);

function changeBlue(){
    text.innerHTML = "I'm blue dabadee dabadaii";
    blueImg.style.marginTop = "20px";
    blueImg.style.marginBottom = "-150px";
    blueImg.style.opacity = "1";
    blueImg.style.zIndex = 1;
    body.style.backgroundColor = "rgb(59, 154, 243)";
    redOut(); 

}

function blueOut() {
    blueImg.style.marginTop = "0";
    blueImg.style.marginBottom = "0";
    blueImg.style.opacity = "0.4";
    blueImg.style.zIndex = 0;
}

function changeRed(){
    text.innerHTML = "Kom nu ketchup så går vi";
    redImg.style.marginTop = "-150px";
    //redImg.style.marginBottom = "150px";
    redImg.style.opacity = "1";
    redImg.style.zIndex = 1;
    body.style.backgroundColor = "rgb(185, 28, 0)";
    blueOut();
    
}

function redOut() {
    redImg.style.marginTop = "0";
    redImg.style.marginBottom = "0";
    redImg.style.opacity = "0.4";
    redImg.style.zIndex = 0;
}

function justYellow() {
    body.style.backgroundColor = "rgb(240, 199, 17)";
    blueImg.style.opacity = 0;
    redImg.style.opacity = 0;
    text.innerHTML="Hejsan hoppsan vad mycket senap";

}