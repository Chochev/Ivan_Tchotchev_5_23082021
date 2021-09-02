class Controller{
    async showListOurson() { 
         let listOurson =await Model.get(`http://localhost:3000/api/teddies`)
         let view = new View
         view.showListOurson(listOurson)
     }
 }