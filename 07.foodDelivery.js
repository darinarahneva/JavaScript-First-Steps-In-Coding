function foodDelivery(input){
    let numberChickenMenu = Number(input[0]);
    let numberFishMenu = Number(input[1]);
    let numberVeganMenu = Number(input[2]);

    let chickenMenu = 10.35;
    let fishMenu = 12.4;
    let veganMenu = 8.15;

    let priceChickenMenu = numberChickenMenu * chickenMenu;
    let priceFishMenu = numberFishMenu * fishMenu;
    let priceVeganMenu = numberVeganMenu * veganMenu;
    let totalPriceMenu = priceChickenMenu + priceFishMenu + priceVeganMenu;
    let priceDesert = totalPriceMenu * 0.2;
    let result = totalPriceMenu + priceDesert + 2.5;

    console.log(result);
}

foodDelivery(["2","4","3"]);
foodDelivery(["9","2","6"]);