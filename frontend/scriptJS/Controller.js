// const { json } = require("stream/consumers");

class Controller{
    //show the products in main page
    async showListOurson() { 
      
         let listOurson = await Model.get(`http://localhost:3000/api/teddies`)
   
         let view = new View();
         view.showListOurson(listOurson)
        
     }
    // show every product in the product page
    async showOurson() {
      
        const searchEl = new URLSearchParams(location.search);
      
        const itemId = searchEl.get("_id");
       
        let item = await Model.get(`http://localhost:3000/api/teddies/${itemId}`);
       
        let view = new View
        
        view.showOurson(item)
       
    }
     // add products in the basket with add btn
  

    async addToCart(oursonId, specification) {
        
       
       const resolvedItem = await Model.get(`http://localhost:3000/api/teddies/${oursonId}`);
    //debugger;
  
        try {
           
            let oursonTrouve = false;
            const   panier = JSON.parse(localStorage.getItem("item")) || [];
            for(let i = 0; i< panier.length; i++){
                if(panier[i]._id === oursonId && panier[i].specification.color === specification.color){
                  
                    panier[i].specification.qty = parseInt(specification.qty) + parseInt(panier[i].specification.qty)
                  
                    oursonTrouve = true;    
                           // console.log(panier[i].specification.color) 
                            console.log(oursonTrouve) 
                   break
                } 
                
            }
            if(oursonTrouve == true){
                localStorage.setItem("item", JSON.stringify(panier))
            }else{
                localStorage.setItem("item", JSON.stringify([...panier, { ...resolvedItem, specification }] ))
            }
           
         //location.reload()
        }catch (e) {
        console.error(e);
        }
        //let view = new View
        // view.addToCart(item)
        
    }
    
    async displayPanier(panier) {
       
        try {
            panier = JSON.parse(localStorage.getItem("item"))|| [];
        }catch (e) {
            console.error(e);
        }
       
        // console.log(panierTotalPrice)

       let view = new View;
       view.displayPanier(panier)
    }

    displayOrder() {
       
        
        let view = new View
        try{
            let order = JSON.parse(localStorage.getItem("form")) || [];
           // console.log(order)
           
            view.displayOrder(order)

            localStorage.removeItem('form');
        }catch (e) {
           // console.error(e);
          
           view.displayOrder()
        }
       
        
    }
    //clear basket function
  

    async clearPanier(item,specification ){
       
        localStorage.removeItem('item')
        console.log(specification)
        location.reload()
    }
 }



 

 
