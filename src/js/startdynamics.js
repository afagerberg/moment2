// DT173G moment 2, Alice Fagerberg

console.log("hello from startdynamics.js");


let heading = document.getElementById("heading");
heading.addEventListener("click", main);


function main(){
    document.getElementById("text").innerHTML = "Välkommen till moment 2. Trevligt att ses igen"

    document.getElementsByTagName("BODY")[0].style.backgroundColor="rgb(247, 247, 247)";
    document.getElementById("blue").style.marginTop = "0";
    document.getElementById("blue").style.marginBottom = "0";
    document.getElementById("blue").style.opacity = "0.4";
    document.getElementById("blue").style.zIndex = 0;

    document.getElementById("red").style.marginTop = "0";
    document.getElementById("red").style.marginBottom = "0"
    document.getElementById("red").style.opacity = "0.4";
    document.getElementById("red").style.zIndex = 0;

}