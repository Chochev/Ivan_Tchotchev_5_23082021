class Router {
    static execute(route,item, param3) {
        let controller = new Controller;
        if(route == "showListOurson") {
            controller.showListOurson()
        }
        else if(route == "showOurson") {
            controller.showOurson()
        }
        else if(route == "addToCart") {
           
            controller.addToCart(item, param3)
        }
        else if(route == "displayPanier") {
            controller.displayPanier(item, param3)
        }
        else if(route == "clearPanier") {
            controller.clearPanier(item,param3)
        }else if(route == "displayOrder") {
            controller.displayOrder()
        }
        else{
            console.log("error, la route n'existe pas")
        }
    }
}

