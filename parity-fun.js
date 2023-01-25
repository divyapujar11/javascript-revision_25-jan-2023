const readline = require('readline-sync')
let num = readline.question("enter a number: ");

function parity(num) {
    if (num % 2 == 0) {
        return "'even'";
    } else {
        return "'odd'";
    }
}

console.log(parity(num));

