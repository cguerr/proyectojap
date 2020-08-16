//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    
});

function guardarLocalStorage(userName, password){
    //let persona= {
       let luserName= userName;
       let lpassword= password;                         
    
    
    localStorage.setItem(luserName, lpassword);
    
    }

//redirecciona al Inicio
function redirectToInit(){

    document.location.href="index";   
}

let userName= document.getElementById("user").value;
let password= document.getElementById("password").value

//valida que no haya espacios en blanco
function notBlankValidation(userName, password){
if(userName !="" && password !=""){
    
    guardarLocalStorage();
    redirectToInit(); 
}
else{
    return false;
}

}


