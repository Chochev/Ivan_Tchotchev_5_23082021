class Model {
    static get(url){
      return  fetch(url)
        .then(res => {return   res.json()})
       
    }
}