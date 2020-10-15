//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

/* function showCartImages(array){
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
}*/



document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(CART_ENTREGABLE).then(function(resultObj){
        if (resultObj.status === "ok"){
           
        cartProduct=resultObj.data.articles;
      
            

          let cartProductNameHTML  = document.getElementById("cartProductName");
          let cartProductCountHTML = document.getElementById("cartProductCount");
          let cartProductUnitCostHTML = document.getElementById("cartProductUnitCost");
          let cartProductCurrencyHTML = document.getElementById("cartProductCurrency");
          let cartProductImgHTML = document.getElementById("cartProductImage").setAttribute("src", cartProduct[0].src);

          
          let cartProductName1HTML  = document.getElementById("cartProductName1");
          let cartProductCount1HTML = document.getElementById("cartProductCount1");
          let cartProductUnitCost1HTML = document.getElementById("cartProductUnitCost1");
          let cartProductCurrency1HTML = document.getElementById("cartProductCurrency1");
          let cartProductImg1HTML = document.getElementById("cartProductImage1").setAttribute("src", cartProduct[1].src);

          let cartTotalCostHTML = document.getElementById("cartTotalCost");
   
      
          cartProductNameHTML.innerHTML = cartProduct[0].name ;
          cartProductCountHTML.innerHTML = cartProduct[0].count;
          cartProductUnitCostHTML.innerHTML = cartProduct[0].unitCost;
          cartProductCurrencyHTML.innerHTML = cartProduct[0].currency;
          
          

          cartProductName1HTML.innerHTML = cartProduct[1].name ;
          cartProductCount1HTML.innerHTML = cartProduct[1].count;
          cartProductUnitCost1HTML.innerHTML = cartProduct[1].unitCost;
          cartProductCurrency1HTML.innerHTML = cartProduct[1].currency;  
          

        
            let conversion = cartProduct[1].unitCost * 40;
            let multiplicacion = cartProduct[0].count * cartProduct[0].unitCost + cartProduct[1].count * conversion;
            console.log(multiplicacion);

          cartTotalCostHTML.innerHTML= multiplicacion;
        
         // showCartImages(cartProduct);
          
        }
    })

 });

 