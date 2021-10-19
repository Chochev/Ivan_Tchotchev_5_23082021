
//display ittems
class View {
    showListOurson(listOurson) {
        for(let item of listOurson){
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
                   
                    <div class="icon"> 
                        <i class="fas fa-shopping-cart fa-2x">
                            <a href="index.html?_id=${item.id}">
                            </a>
                        </i>
                    </div>
                </div>
            </div>
                ` 
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
                    <h3>${item.name} </h3>
                    <h3>${priceConvert(item.price)} </h3>
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
                </div>
                 <button id="addItemBtn" class="addItemBtn" type="submit"  >Ajouter au panier</button>
                
                    
            </div>
        `; 
      
        let button = document.getElementById('addItemBtn')
        button.addEventListener('click', () => {
            this.clickOnAddToCart(item._id)
            
            console.log(colorsOption.value)
            console.log(quantity.value)
        })
       
    }
   
    clickOnAddToCart(item) {
        let selectQuantity = document.getElementById('quantity')
        let selectColor = document.getElementById('colorsOption')
 // debugger;
        Router.execute('addToCart' , item, {color: selectColor.value, qty: selectQuantity.value} )
       // console.log(colorsOption.value) 
    }
    
    getColorOption(item) {
    
        let colorOption =''
        for (let colors of item.colors) {
            colorOption += `<option value="${colors}">${colors}</option>`;            
        }
        return colorOption  
    }
      
    // addToCart(item) {
    //     const selectOurson = document.getElementById("oursonPreview");  
    
    //     selectOurson.innerHTML += `
    //         <div class = "product">
    //             <div class="oursonImage"> 
    //                 <a href="index.html?_id=${item._id}">
    //                     <img src="${item.imageUrl}"  alt="${item.name}">
    //                 </a>
    //             </div>
    //             <div class = "productInfo">
    //                 <h3>${item.name} </h3>
                  
    //                 <h3>${priceConvert(item.price)} </h3>
    //             </div>
    //         </div>
    //     `;
    
    // }
   
    displayPanier(panier){
        // let select = document.getElementById('quantity')
        // let select1 = document.getElementById('colorsOption')
        // if(panier !== null){

         
         //  debugger;
        for(let item of panier){

            let selectQuantity = document.getElementById('quantity')
            let selectColor = document.getElementById('colorsOption')
            let showProducts = document.getElementById("oursonPreview");

            function handleDelete(id) {
                this.clearPanier(item._id);
            }
                showProducts.innerHTML += `
                    <div class = "product">
                        <div class="oursonImage"> 
                            <img src="${item.imageUrl}"  alt="${item.name}">
                        </div>
                        <div class = "productInfo">
                            <h3>${item.name} </h3>
                            <h3>   </h3>
                       
                            <h3>${priceConvert(item.price)} </h3>
                           <h3> <strong>Color: </strong>${item.specification.color}</h3>
                           <h3> <strong>Quantity: </strong>${item.specification.qty}</h3>
                        </div>
                        <button class="clearItem" type="button" data-id="${item._id}" >X</button> 
                       
                    </div>
                `;
        }
           // debugger;
            document.querySelectorAll('.clearItem')
                .forEach(button => button.addEventListener('click', (event) => {
                //debugger;
                     this.clearPanier(event.target.dataset.id);
                    console.log('click')
                }))
    }
    clearPanier(id) {
        try{
            const currentCart = JSON.parse(localStorage.getItem('item')) || [];
        // debugger;

            localStorage.setItem('item', JSON.stringify(
                currentCart.filter(({_id }) => _id !== id)
            ));
            location.reload()
        } catch(e) {
           console.error(e);
        }
    }


   
     
    validateForm() {
        let lastName = document.getElementById('lastName').value;
        let address = document.getElementById('address').value;
        let city = document.getElementById('city').value;
        let firstName = document.getElementById('firstName').value;
        let email = document.getElementById('email').value;

        let lastNameCheck = /^[A-Za-z. ]{3,30}$/ ;
        let firstNameCheck = /^[A-Za-z. ]{3,30}$/ ;
        let addressCheck = /^[A-Za-z. ]{3,30}$/ ;
        let cityCheck = /^[A-Za-z. ]{3,30}$/ ;
        let emailCheck = /^[A-Za-z_]{3, }@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/ ;

        if(lastNameCheck.test(lastName)){
        
        }
    };
}
