let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("edtpassword");
let confirmar = document.getElementById("edtconfirmarpassword");
let eyeicoin2= document.getElementById("eyeicon2")

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src="./multimedia/eye_open.png";
    }else{
        password.type = "password";
        eyeicon.src="./multimedia/eye_close.png";
    }
}

eyeicon2.onclick = function(){
    if(confirmar.type == "password"){
        confirmar.type = "text";
        eyeicoin2.src="./multimedia/eye_open.png";
    }else{
        confirmar.type = "password";
        eyeicoin2.src="./multimedia/eye_close.png";
    }
}