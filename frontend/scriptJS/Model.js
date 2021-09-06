class Model {
    static get(url){
      return  fetch(url)
        .then(res => {return   res.json()})
       
    }
    
}

// class ModelIttem {
//     static get(ittem){
//         return fetch(ittemUrl)
//         .then(res => {return res.json()})
//     }
// }

