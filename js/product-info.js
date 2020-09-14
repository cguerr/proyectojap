//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}



function showComments(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let usersComments = array[i];
        console.log(usersComments);
        
       htmlContentToAppend += `
        <div class="container">
            <div class="list-group-item" >
            <p class="row"><div> `+ `<strong>` + usersComments.user + `</strong>` + ` `  + usersComments.dateTime + `</div>` + usersComments.description + ` ` + `<span class="fa fa-star checked"> ` + usersComments.score + `</span> </p>
            </div>
        </div>
        ` 

        document.getElementById("comentOfAUser").innerHTML = htmlContentToAppend;
    }
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
      
      if (resultObj.status === "ok")
      {
          products = resultObj.data;

          let productsNameHTML  = document.getElementById("productsName");
          let productsDescriptionHTML = document.getElementById("productsDescription");
          let productsCostHTML = document.getElementById("productsCost");
          let productsCurrencyHTML = document.getElementById("productsCurrency");
          let productsSoldCountHTML = document.getElementById("productsSoldCount");
          let productsCategoryHTML = document.getElementById("productsCategory");
          


          productsNameHTML.innerHTML = products.name;
          productsDescriptionHTML.innerHTML = products.description;
          productsCostHTML.innerHTML = products.cost;
          productsCurrencyHTML.innerHTML = products.currency;
          productsSoldCountHTML.innerHTML = products.soldCount;
          productsCategoryHTML.innerHTML = products.category;
                    
          //Muestro las imagenes en forma de galería
          showImagesGallery(products.images);
      }
    })

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if(resultObj.status === "ok")
        {
            usersComments= resultObj.data;

             showComments(usersComments);
        }
    })   


});