
const mainContainer = document.getElementById("mainContainer")

const header =  document.createElement("header");
mainContainer.appendChild(header)
header.innerHTML = `
<header>
<navbar>
<img class="logo" src="./backend/images/logo.jpg"/>
<ul>
<li>Accueil</li>
<li>Panier</li>
</ul>
</navbar>
</header>
`;
// const section =  document.createElement("section");
// mainContainer.appendChild(section)
// section.innerHTML = `<section class="cardSection"></section>`


//displayed all ittems
    fetch(`http://localhost:3000/api/teddies`)
    .then(res => {return   res.json()})
    .then(data => showCards(data));
    
    showCards = data => {
      
        for(ittem of data){
            const cards =document.getElementById("mainContainer")
            // cards =  document.createElement("cards");
            const price = priceConvert(ittem.price);
            cards.innerHTML += ` <a href="index.html?_id=${ittem._id}"><img src="${ittem.imageUrl}" class="mainContainer" alt="${ittem.name}"></a>
            <h3>${ittem.name} </h3>
            <h3>${price} </h3>
            <p>${ittem.description} </p>
            `
        }
    }

