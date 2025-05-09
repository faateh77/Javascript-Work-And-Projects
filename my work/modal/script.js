var modal = document.getElementById("modal");
var openbtn = document.getElementById("btn")
var closeBtn = document.getElementById("close");
openbtn.addEventListener("click",function(){
     modal.style.display = "block";
})
closeBtn.addEventListener("click",function(){
    modal.style.display = "none";
})
