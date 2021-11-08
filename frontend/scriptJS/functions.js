 //price convert
priceConvert = ittemPrice => {
    let price = `${ittemPrice}`;
    price = Intl.NumberFormat ("fr-FR", {
        style:"currency",
        currency: "EUR",
        fractionDigits:2,
    }).format(price/100);
    return price;
    
}

