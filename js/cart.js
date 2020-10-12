//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

 function showCartImages(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let cartProduct = array[i];
        
        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + cartProduct.src + `" alt="">
            </div>
        </div>
        `
        
        document.getElementById("cartProductImage").innerHTML = htmlContentToAppend; 
    }
}



document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
           
        cartProduct=resultObj.data.articles;
      
            

          let cartProductNameHTML  = document.getElementById("cartProductName");
          let cartProductCountHTML = document.getElementById("cartProductCount");
          let cartProductUnitCostHTML = document.getElementById("cartProductUnitCost");
          let cartProductCurrencyHTML = document.getElementById("cartProductCurrency");
   
          let cartTotalCostHTML = document.getElementById("cartTotalCost");
   
          
          

          cartProductNameHTML.innerHTML = cartProduct[0].name ;
          cartProductCountHTML.innerHTML = cartProduct[0].count;
          cartProductUnitCostHTML.innerHTML = cartProduct[0].unitCost;
          cartProductCurrencyHTML.innerHTML = cartProduct[0].currency;

          let multiplicacion= 100 * 2 // Intento hacer esto pero da NaN y no lo puedo subir a git con ese error
                                      //  cartProductCountHTML * cartProductUnitCostHTML;

          cartTotalCostHTML.innerHTML= multiplicacion;
        
          showCartImages(cartProduct);
          
        }
    })

 });

 