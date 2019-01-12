let userInputArr = process.argv.slice(2);

console.log("Before:")
console.log(userInputArr);

for (let x = 0; x < userInputArr.length; x++) {
    userInputArr[x] = userInputArr[x] * 2;
}

console.log("After: ");
console.log(userInputArr);