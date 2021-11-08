//const { json } = require("stream/consumers");

//display ittems
class View {
  showListOurson(listOurson) {
    for (let item of listOurson) {
      const cards = document.getElementById("mainContainer");

      cards.innerHTML += `
            <div class="card" >
                <div class="cardImg">
                    <a href="product.html?_id=${item._id}">
                        <img src="${item.imageUrl}"  alt="${item.name}">
                    </a>
                </div>
                <div class="cardDescription">
                    <div class="namePrice">
                        <h3>${item.name} </h3>
                        <h3>${priceConvert(item.price)} </h3>
                    </div>
                    <div class="itemInfo">
                        <p>${item.description} </p>
                    </div>
                   
                </div>
            </div>
                `;
    }
   
  }
  //display ittem

  showOurson(item) {
    const card = document.getElementById("productContainer");

    card.innerHTML += `
            <div class=itemImage>
                <img src="${item.imageUrl}"  alt="${item.name}">
            </div>
            <div class="itemInfo">
                <div class = "namePrice">
                    <h3 >${item.name} </h3>
                    <h3 >${priceConvert(item.price)} </h3>
                </div>
                <div class="itemDescription">
                    <p>${item.description} </p>             
                </div>
                <div class="Description">
                    <div class="optionSelectors">
                        <select class = "colorsOption" id = "colorsOption">
                        ${this.getColorOption(item)}
                        </select> 
                        <select name="quantity"  id="quantity" class="quantity" ">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>  
                      
                    </div>        
                    <button id="addItemBtn" class="addItemBtn" type="submit"  >Ajouter au panier</button>
                </div>
                
                
                    
            </div>
        `;

    let button = document.getElementById("addItemBtn");
    button.addEventListener("click", () => {
      this.clickOnAddToCart(item._id);
      alert('vous avez ajouter de produit dans votre panier')
      location.reload();
      document.location.href = "panier.html";
    });

  }

  clickOnAddToCart(item) {
    let selectQuantity = document.getElementById("quantity");
    let selectColor = document.getElementById("colorsOption");

    // debugger;
    Router.execute("addToCart", item, {
      color: selectColor.value,
      qty: selectQuantity.value,
    });
  }
  //get colors
  getColorOption(item) {
    let colorOption = "";
    for (let colors of item.colors) {
      colorOption += `<option value="${colors}">${colors}</option>`;
    }
    return colorOption;
  }

  cartPrice(item) {
    let cartPrice = priceConvert(item.price * item.specification.qty);

    return cartPrice;
  }

  displayPanier(panier, item) {
    //  debugger;
    
    for (let item of panier) {
      let showProducts = document.getElementById("oursonPreview");

      showProducts.innerHTML += `
                <div class = "product">
                    <div class="oursonImage"> 
                        <img src="${item.imageUrl}"  alt="${item.name}">
                    </div>
                  
                    <div class= "panierName">
                     <h3 >${item.name} </h3>
                     </div>
                       
                        <div class= "panierColorOpt"> 
                        <a href="product.html?_id=${item._id}" class= "changeColor"><h3  > <strong><i>Color</i>: </strong> ${
                          item.specification.color
                        }</h3></a>
                        </div>
                       
                        <div class ="deleteBtn"><button class="clearItem" type="button" data-id="${
                          item._id
                          }" data-specification="${
                           item.specification.color
                           }" >X</button> 
                        </div>

                        <div class= "qtyColorOpt"> 
                        <a href="product.html?_id=${item._id}" class= "changeQty"><h3  > <strong><i>Quantity</i>: </strong> ${
                          item.specification.qty
                       }</h3></a>
                       </div>
                       
                        <div lass= "panierPrice"> 
                         <h3  >TOTAL : ${this.cartPrice(item)} </h3>
                         </div>
                              
                   
                         </div>
                  
               
            `;
    }
    

    // totalPrice
    let cartTotal = [];
    panier.forEach((item) => {
      let cartPrice = this.cartPrice(item);
      cartTotal.push(parseInt(cartPrice));
    });
    let sumPrice = 0;
    for (let i = 0; i < cartTotal.length; i++) {
      sumPrice += cartTotal[i];
    }
    //console.log(sumPrice);
    let totalPrice = document.getElementById("oursonPreview");
    totalPrice.innerHTML += `
        <h3 class="sumTotal">TOTAL : ${sumPrice},00 € </h3>
        `;

    // debugger;
    document.querySelectorAll(".clearItem").forEach((button) =>
      button.addEventListener("click", (event) => {
        //debugger;
        this.clearPanier(
          event.target.dataset.id,
          event.target.dataset.specification
        );
       // console.log("click");
      })
    );
    
      

    //form validation

    let form = document.querySelector("#loginForm");

   // console.log(form);

    //regExp fot all the var

    let lastNameExp = new RegExp("^[A-Za-z. ]{3,30}$");
    let firstNameExp = new RegExp("^[A-Za-z. ]{3,30}$");
    // let addressExp = new RegExp('^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$');
    let addressExp = new RegExp("^[A-Za-z. ]{3,30}$");
    let cityExp = new RegExp("^[A-Za-z. ]{3,30}$");
    let emailRegExp = new RegExp(
      "^[A-Za-z0-9.-_]+[@]{1}[A-Za-z0-9.-_]+[.]{1}[a-z]{2,10}$",
      "g"
    );

    //eventListener for all the fields
    form.lastName.addEventListener("change", function () {
      validLastName(this);
    });

    form.firstName.addEventListener("change", function () {
      validFirstName(this);
    });

    form.address.addEventListener("change", function () {
      validAddress(this);
    });

    form.city.addEventListener("change", function () {
      validCity(this);
    });

    form.email.addEventListener("change", function () {
      validEmail(this);
    });

    //test

    const validLastName = function (inputLastName) {
      let testLastName = lastNameExp.test(inputLastName.value);
      //console.log(testLastName);
      let small = inputLastName.nextElementSibling;

      if (testLastName) {
        small.innerHTML = "Valide";
        return true;
      } else {
        small.innerHTML = "Non Valide";
        return false;
      }
    };

    const validFirstName = function (inputFirstName) {
      let testFirstName = firstNameExp.test(inputFirstName.value);
      //  console.log(testFirstName);
      let small = inputFirstName.nextElementSibling;

      if (testFirstName) {
        small.innerHTML = "Valide";
        return true;
      } else {
        small.innerHTML = "Non Valide";
        return false;
      }
    };

    const validAddress = function (inputAddress) {
      let testAddress = addressExp.test(inputAddress.value);
      // console.log(testAddress);
      let small = inputAddress.nextElementSibling;

      if (testAddress) {
        small.innerHTML = "Valide";
        return true;
      } else {
        small.innerHTML = "Non Valide";
        return false;
      }
    };

    const validCity = function (inputCity) {
      let testCity = cityExp.test(inputCity.value);
      // console.log(testCity)
      let small = inputCity.nextElementSibling;

      if (testCity) {
        small.innerHTML = "Valide";
        return true;
      } else {
        small.innerHTML = "Non Valide";
        return false;
      }
    };

    const validEmail = function (inputEmail) {
      let testEmail = emailRegExp.test(inputEmail.value);
      //  console.log(testEmail);
      let small = inputEmail.nextElementSibling;

      if (testEmail) {
        small.innerHTML = "Valide";
        return true;
      } else {
        small.innerHTML = "Non Valide";
        return false;
      }
    };
   
    //submit btn
    form.addEventListener("submit", function (e) {
     // debugger;
     console.log(panier)
      e.preventDefault();
      if (
        (validLastName(form.lastName) &&
          validFirstName(form.firstName) &&
          validAddress(form.address) &&
          validCity(form.city) &&
          validEmail(form.email)) ||
          true
          
      ) { 
       // console.log("form valid");
        fetch("http://localhost:3000/api/teddies/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contact: {
              firstName: form.firstName.value,
              lastName: form.lastName.value,
              address: form.address.value,
              city: form.city.value,
              email: form.email.value,
            },
            products: panier.map((product) => product._id),
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("form", JSON.stringify(data));
           localStorage.removeItem("item")
           document.location.href = "order.html";

           

          })
          .catch((erreur) => console.log("erreur : " + erreur));
      } 
   
    });
    
}

  displayOrder(orderInfo) {
    const info = document.getElementById("displayOrder");
    if(orderInfo != undefined){
      info.innerHTML += `
      <p> Chere client : <span> ${orderInfo.contact.lastName + ' ' + orderInfo.contact.firstName} </span>, </br> 
      Votre comande avec la référence : ${orderInfo.orderId} , a été acceptée. </br> 
      Votre facture va vous être transmise par mail à : ${orderInfo.contact.email} . </br> 
      Votre commande sera envoyée à l'adresse suivante : ${orderInfo.contact.firstName} ${orderInfo.contact.lastName}  </br> 
      <span> ${orderInfo.contact.address} </span> </br> 
      <span> ${orderInfo.contact.city} </span>

      </p>
      `
    }else {
      info.innerHTML = `Votre commande est vide`
    }

  }

  //delete panier items

  clearPanier(id, color) {
    console.log(id);
    console.log(color);

    try {
      const currentCart = JSON.parse(localStorage.getItem("item")) || [];
      // debugger;
      console.log(currentCart);
      // console.log(localStorage.getItem('item'))
      // localStorage.setItem('item', JSON.stringify(
      //     currentCart.filter(({_id }) => _id!== id && specification.color!==color)
      // ));
      let newCart = [];
      for (let item of currentCart) {
        if (!(item.specification.color === color && item._id === id)) {
          console.log(item);
          newCart.push(item);
        }
      }
      console.log(newCart);
      localStorage.setItem("item", JSON.stringify(newCart));
      location.reload();
    } catch (e) {
      console.error(e);
    }
  }

 
}
