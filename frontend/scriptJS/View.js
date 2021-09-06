class View {
    showListOurson(listOurson) {
        for(ittem of listOurson){
                        const cards = document.getElementById("mainContainer");
                
                        cards.innerHTML += `<div class="card" > <div class="cardImg"><a href="product.html?_id=${ittem._id}"><img src="${ittem.imageUrl}"  alt="${ittem.name}"></a></div>
                        <div class="cardDescription">
                        <div class="namePrice">
                        <h3>${ittem.name} </h3>
                        <h3>${priceConvert(ittem.price)} </h3>
                        </div>
                        <div class="ittemInfo">
                        <p>${ittem.description} </p>
                        </div>
                       <div class="icon"> <i class="fas fa-shopping-cart fa-2x"><a href="./fronend/index.html?_id=${ittem.id}"></a></i></div>
                        </div>
                        </div>
                         ` 
                                 }
                                }
}
