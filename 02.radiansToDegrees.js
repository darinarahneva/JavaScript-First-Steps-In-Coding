function radiansToDegrees(input){
    let r = Number(input[0]);
    let result = r * 180 / Math.PI;
    console.log(result);
}

radiansToDegrees(["3.1416"]);
radiansToDegrees(["6.2832"]);