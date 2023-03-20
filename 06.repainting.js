function repainting(input){
    let requiredAmountNylon = Number(input[0]);
    let requiredAmountPaint = Number(input[1]);
    let amountThinner = Number(input[2]);
    let hoursMaster = Number(input[3]);

    let amountForNylon = (requiredAmountNylon + 2) * 1.5;
    let amountForPaint = (requiredAmountPaint * 1.1) * 14.5;
    let amountForDiluent = amountThinner * 5;
    let amountForBags = 0.4;
    let totalAmountForMaterials = amountForNylon + amountForPaint + amountForDiluent + amountForBags;
    let amountForMasters = (totalAmountForMaterials * 0.3) * hoursMaster;
    let result = totalAmountForMaterials + amountForMasters;

    console.log(result);
}

repainting(["10", "11", "4", "8"]);
repainting(["5", "10", "10", "1"]);