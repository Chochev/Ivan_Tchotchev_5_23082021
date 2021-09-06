// récupération de l'id du produit
const searchEl = new URLSearchParams(location.search);
const ittemId = searchEl.get("_id");
  const imageUrl = ` http://localhost:3000/api/teddies/${ittemId}`;
  const card = document.getElementById("productImage");
//   const price = priceConvert(ittem.price);