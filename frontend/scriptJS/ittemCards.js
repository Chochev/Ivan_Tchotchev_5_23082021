//product card
class ittem {
    constructor(id,name,description,price,option,quantity,imgLink) {
        this.id = id;
        this.name = name; 
        this.description = description;
        this.price = +price;
        this.option = option;
        this.quantity = +quantity;
        this.imageUrl = imgLink;
    }
}