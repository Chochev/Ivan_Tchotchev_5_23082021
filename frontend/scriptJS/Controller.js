class Controller{
    async showListOurson() { 
         let listOurson =await Model.get(`http://localhost:3000/api/teddies`)
         let view = new View
          view.showListOurson(listOurson)
        
     }
    
 }


 //take ittem id
//  getNewId = new URLSearchParams(location.search);
//   ittemId = getNewId.get("id");
//  class Ourson{ 
// async showOurson() {
//      ittemUrl = await ModelIttem.get( `http://localhost:3000/api/teddies/${ittemId}`)
//      let viewIMG = new ViewIMG
//     viewIMG.showOurson(Ourson)
    
// }
// }




fetch(imageUrl)
.then((response) => response.json())
.then((data) => {
    ittem = data;
    addIttem(data);

    function addIttem(ittem) {
           
            //  const card = document.getElementById("productImage");
            card.innerHTML += `<div class=ittemImage>
         <img src="${ittem.imageUrl}"  alt="${ittem.name}">
         </div>
         <div class = "namePrice">
         <h3>${ittem.name} </h3>
         <h3>${priceConvert(ittem.price)} </h3>
         </div>
         <div class="ittemInfo">
                        <p>${ittem.description} </p>
         </div>
         `;
       
    }
})