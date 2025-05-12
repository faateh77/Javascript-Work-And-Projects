var calcScreen = document.getElementById("screen-input");
var btn = document.querySelectorAll("button");

function press(val){
    calcScreen.value += val;
    
}
function clearScreen(){
    calcScreen.value = '';
}
function Calculate(){
    calcScreen.value = eval(calcScreen.value);
  }
  

