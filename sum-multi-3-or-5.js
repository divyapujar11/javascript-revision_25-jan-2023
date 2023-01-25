const readline = require('readline-sync')
let n = readline.question("enter a number: ");
let sum = 0;
for (let i = 1; i <= n; i++) {
    if ((i % 3 == 0) || (i % 5 == 0)) {
        sum += i;
    }

}
console.log(`the sum of the multiples of 3 or 5 from 1 to ${n} is ${sum}`);