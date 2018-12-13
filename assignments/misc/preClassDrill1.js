let userInput = parseFloat(process.argv[2]);

let theFunction = function (userInput) {
    if (isNaN(userInput)) {
        throw "THIS IS NOT A NUMBER";
    } else {
        console.log(-userInput);
    }
}

theFunction(userInput);