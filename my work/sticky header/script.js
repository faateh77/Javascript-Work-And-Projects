var header = document.getElementById("header");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        header.style.backgroundColor = "grey"; 
        header.style.position = "fixed"; 
        header.style.top = "0px";
        

    } else {
        header.style.backgroundColor = "#000"; 
        header.style.position = "unset"; 
    }
});
