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

let cartTotalCostHTML;

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

              cartTotalCostHTML = document.getElementById("cartTotalCost");
   
      
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
            
          cartTotalCostHTML.innerHTML= multiplicacion;
        
         // showCartImages(cartProduct);
          
        }
    })
 });

  
 //CALCULO DE ENVÍO
/*
 function calculoEnvio(){
     //voy a preguntar, if el radio button seleccionado == tal hacer este calculo, else hacer este otro calculo, else hacer este otro calculo. Y el resultado mostrarlo en un espacio HTML para este valor
     let radioValue = document.getElementsByName('gender');
     console.log(radioValue);
   for(let i=0; i< radioValue.length; i++){
         if(radioValue[i].checked == premium ){ // '.checked' no me lo da, es de alguna librería ????
        //ACA LE METO EL CALCULO CORRESPONDIENTE
        }   

        

     } 

     
 }
*/


function getChosenShipping(){

    let radioValues = document.getElementsByName('gender');
    let valueSelected;

  for(let i=0; i< radioValues.length; i++){
      if(radioValues[i].checked){ 
       valueSelected = radioValues[i].value;
       } 
    } 
console.log(valueSelected);
costoEnvio(valueSelected);    
}
 

let shippingCost;
function costoEnvio(valueSelected){
   
    if(valueSelected == 'premium'){
        shippingCost = (15 * cartTotalCostHTML.innerHTML / 100) + Number(cartTotalCostHTML.innerHTML);
    }
    else if(valueSelected == 'express'){
        shippingCost = (7 * cartTotalCostHTML.innerHTML / 100) + Number(cartTotalCostHTML.innerHTML);
    }
    else{
        shippingCost = (5 * cartTotalCostHTML.innerHTML / 100) + Number(cartTotalCostHTML.innerHTML);
    }

    document.getElementById('costToPay').innerHTML = shippingCost;
}
