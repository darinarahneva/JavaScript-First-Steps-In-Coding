function usdToBgn(input) {
    let usd = 1.79549;
    let bgn = Number(input[0]);
    let result = bgn * usd;
    console.log(result);
}

usdToBgn(["22"]);
usdToBgn(["100"]);
usdToBgn(["12.5"]);