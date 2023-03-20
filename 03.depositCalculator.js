function depositCalculator(input){
    let depositSum = Number(input[0]);
    let termDeposit = Number(input[1]) / 100;
    let annualInterestRate = Number(input[2]);
    let sum  = depositSum  + termDeposit * ((depositSum * annualInterestRate ) / 12)
    console.log(sum);
}

depositCalculator(["200", "3", "5.7"]);
depositCalculator(["2350", "6", "7"]);