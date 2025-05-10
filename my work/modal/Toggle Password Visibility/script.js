var pwd = document.getElementById("pwd-field");
var chkbox = document.getElementById("checkbox");
function togglePassword(){
    if(chkbox.checked){ 
       pwd.setAttribute("type","text")
    }
    else{
       pwd.setAttribute("type","password");
    }
}