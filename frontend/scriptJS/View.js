class View {
    showListOurson(listOurson) {
        for(ittem of listOurson){
                         const cards = document.getElementById("mainContainer")
                        // cards =  document.createElement("cards");
                
                        const price = priceConvert(ittem.price);
                        cards.innerHTML += `<div class="card"> <div class="cardImg"><a href="index.html?_id=${ittem._id}"><img src="${ittem.imageUrl}"  alt="${ittem.name}"></a></div>
                        <div class="cardDescription">
                        <div class="namePrice">
                        <h3>${ittem.name} </h3>
                        <h3>${price} </h3>
                        </div>
                        <div class="ittemInfo">
                        <p>${ittem.description} </p>
                        </div>
                        </div>
                        </div>
                        
                        `
                    }
    }
}