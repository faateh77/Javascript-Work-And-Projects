var btn = document.getElementById("readmore");
var p2 = document.getElementById("p2");
// function readMore(){
//   if (para2.style.display === "none") {
//       para2.style.display = "block";
//       // dots.style.display = "none";
//       btn.innerText = "Read less";
//     }
//     else {
//       para2.style.display = "none";
//       // dots.style.display = "inline";
//       btn.innerText = "Read more";
//     }
    
// }
//alternative Method
btn.addEventListener("click",function() {
   if (p2.classList.contains("hidden")){
       p2.classList.remove("hidden");
       btn.innerText = "Read less";
   } 
    else {
       p2.classList.add("hidden");
       btn.innerText = "Read more";
    }
});