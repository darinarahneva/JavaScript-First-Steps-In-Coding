function basketballEquipment(input){
    let annualFeeForBasketballPractice = Number(input[0]);

    let priceBasketballShoes = annualFeeForBasketballPractice * 0.6;
    let priceBasketballTeam = priceBasketballShoes * 0.8;
    let priceBasketballPrice = priceBasketballTeam / 4;
    let priceBascetballAccessories = priceBasketballPrice / 5;
    let result = annualFeeForBasketballPractice + priceBasketballShoes + priceBasketballTeam + priceBasketballPrice + priceBascetballAccessories;

    console.log(result);
}

basketballEquipment(["365"]);
basketballEquipment(["550"]);