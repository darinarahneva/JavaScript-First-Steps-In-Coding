function vacationBooksList(input){
    let numberOfPage = Number(input[0]);
    let page = Number(input[1]);
    let numberOfDays = Number(input[2]);
    let result = (numberOfPage/ page) / numberOfDays;
    console.log(result);
}

vacationBooksList(["212","20","2"]);
vacationBooksList(["432","15","4"]);