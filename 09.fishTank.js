// обем на аквариумa: 85 * 75 * 47 = 299625 см3
// обем в литри: 299625 * 0.001 или  299625 / 1000 => 299.625 литра
// заето пространство: 17% = 0.17
// нужни литри: 299.625 * (1 - 0.17) = 248.68875 литра

function fishTank(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let volumeAquarium = lenght * width * height;
    let volumeLiters = volumeAquarium / 1000;
    let occupiedSpace = percentage / 100;
    let litersNeeded = volumeLiters * (1 - occupiedSpace);

    console.log(litersNeeded);
}

fishTank(["85", "75", "47", "17"]);
fishTank(["105", "77", "89", "18.5"]);