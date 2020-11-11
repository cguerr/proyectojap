   
    document.addEventListener("DOMContentLoaded", function (e) {
        
        document.getElementById("botonform").addEventListener('click', function(e){
           
         
        var completeName = document.getElementById("completeNameInput").value;
        var edge = document.getElementById("edgeInput").value;
        var email = document.getElementById("emailInput").value;
        var phone = document.getElementById("phoneInput").value;
        
               
    

      const usuarioLogueado = {"completeName": completeName, "edge": edge,
        "email": email,
        "phone": phone};

        const dataString= JSON.stringify(usuarioLogueado);
        localStorage.setItem("profileInfo", dataString);    

        })
      
        let objeto= JSON.parse(localStorage.getItem("profileInfo"));


            document.getElementById("completeNameInput").value = objeto.completeName;
            document.getElementById("edgeInput").value = objeto.edge;
            document.getElementById("emailInput").value = objeto.email;
            document.getElementById("phoneInput").value= objeto.phone;

  });
  

