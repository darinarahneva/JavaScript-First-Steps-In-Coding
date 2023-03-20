function suppliesForSchool(input){
    let numberPacketChemicals = Number(input[0]);
    let NumberPacketMarkers = Number(input[1]);
    let litersChalkboardCleaner = Number(input[2]);
    let percentageReduction = Number(input[3]) / 100;

    let packetChemicals = 5.8;
    let packetMarkers = 7.2;
    let preparation = 1.2;

    let pricePacketChemicals = numberPacketChemicals * packetChemicals;
    let pricePacketMarkers = NumberPacketMarkers * packetMarkers;
    let pricePreparation = litersChalkboardCleaner * preparation;
    let priceAllMaterials = pricePacketChemicals + pricePacketMarkers + pricePreparation;
    let result = priceAllMaterials - (priceAllMaterials * percentageReduction);

    console.log(result);
}

suppliesForSchool(["2", "3", "4", "25"]);
suppliesForSchool(["4", "2", "5", "13"]);