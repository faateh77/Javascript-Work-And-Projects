var btn = document.getElementById("btn");
var box = document.getElementById("box");
var swipeBar = document.querySelector(".swipe-bar")
btn.addEventListener("click",function(){
  if(btn.style.float == "left"){
    btn.style.float = "right";
    document.body.style.backgroundColor = "black";
    swipeBar.style.backgroundColor ="#049e1c";
  }
  else{
    btn.style.float = "left";
    document.body.style.backgroundColor = "#dfdede";
    swipeBar.style.backgroundColor ="#08c1a9";
  }
})

