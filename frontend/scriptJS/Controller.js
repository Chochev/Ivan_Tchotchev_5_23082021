
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
  

    async addToCart(item, specification) {
        
       
       const resolvedItem = await Model.get(`http://localhost:3000/api/teddies/${item}`);
    //debugger;
        try {
            const   panier = JSON.parse(localStorage.getItem("item")) || [];
            localStorage.setItem("item", JSON.stringify([...panier, { ...resolvedItem, specification }] ))
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
       let view = new View;
       view.displayPanier(panier)
    }

    //clear basket function
    async clearPanier(item) {
       
        localStorage.removeItem('item')
        location.reload()
    }

    
 }



 

 
