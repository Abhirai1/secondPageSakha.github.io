// Sound Part Start
var p=0;
var tom1 = new Audio("music/LordKrishna.mp3");
document.getElementById("img-volume").onclick = function() {
    if(p==0){
        p=1; 
        myFunction();
    }
    else{
        p=0;
        stopaudio();
    }
};

function myFunction() { 
    tom1.play();
    document.getElementById("img-volume").src="./images/volume.png";
}
function stopaudio() {
    tom1.pause();
    document.getElementById("img-volume").src="./images/mute.png";
} 
// Sound Part Ends 


// FAQ Part 

document.getElementById("btncol1").onclick = function() {
    console.log("hi");
    document.getElementById("text-area").innerHTML = "What is the purpose of life ?";

};

document.getElementById("btncol2").onclick = function() {
    console.log("hi");
    document.getElementById("text-area").innerHTML = "What is relationship ?";

};

document.getElementById("btncol3").onclick = function() {
    console.log("hi");
    document.getElementById("text-area").innerHTML = "What is life ?";

};

document.getElementById("btncol4").onclick = function() {
    console.log("hi");
    document.getElementById("text-area").innerHTML = "What is soul ?";

};

document.getElementById("btncol5").onclick = function() {
    console.log("hi");
    document.getElementById("text-area").innerHTML = "What is happiness ?";

};

// End of FAQ
