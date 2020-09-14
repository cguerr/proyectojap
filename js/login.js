
document.addEventListener("DOMContentLoaded", function(e){
    const formLogin= document.getElementById("formLogin");
    formLogin.onsubmit= function(e){
        e.preventDefault();
        const userEmail= document.getElementById("user").value;
        localStorage.setItem("user", userEmail);
        window.location.href="/";
        console.log(user);
    }
    
});


