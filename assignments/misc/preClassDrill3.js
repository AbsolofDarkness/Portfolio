let userInputOperation = process.argv[2];
let userInputNumbers = process.argv.slice(3);

const doThings = function (operation, numbersArr) {
    switch (operation) {
        case "add":
            for (let x = 0; x < numbersArr.length; x++) {
                numbersArr[x] = numbersArr[x] + 2;
            }
            break;
        case "subtract":
        for (let x = 0; x < numbersArr.length; x++) {
            numbersArr[x] = numbersArr[x] - 2;
            }
            break;
        case "multiply":
        for (let x = 0; x < numbersArr.length; x++) {
            numbersArr[x] = numbersArr[x] * 2;
            }
            break;
        case "divide":
            for (let x = 0; x < numbersArr.length; x++) {
            numbersArr[x] = numbersArr[x] / 2;
            }
            break;
        default:
            return "ERROR: NOT CORRECT OPERATION";
    }
    return numbersArr;
}

console.log(doThings(userInputOperation, userInputNumbers));