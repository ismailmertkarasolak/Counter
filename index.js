let number = 0

document.getElementById("increasButton").onclick = function(){
    number++;
    document.getElementById("number").innerHTML = number;
} 

document.getElementById("decreaseButton").onclick = function(){
    number--;
    document.getElementById("number").innerHTML = number;
} 

document.getElementById("resetButton").onclick = function(){
    document.getElementById("number").innerHTML = number = 0;
} 


