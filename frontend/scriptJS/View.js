class View {
    showListOurson(listOurson) {
        for(ittem of listOurson){
                        const cards = document.getElementById("mainContainer")
                        // cards =  document.createElement("cards");
                        const price = priceConvert(ittem.price);
                        cards.innerHTML += ` <a href="index.html?_id=${ittem._id}"><img src="${ittem.imageUrl}" class="mainContainer" alt="${ittem.name}"></a>
                        <h3>${ittem.name} </h3>
                        <h3>${price} </h3>
                        <p>${ittem.description} </p>
                        `
                    }
    }
}