const readline= require('readline-sync')
let n = readline.question("enter a number: ");
let sum = 0;
for( let i = 1; i<=n; i++){
    sum += i;
}
console.log(`the sum of the numbers 1 to ${n} is ${sum}`);

// the below code is executed in browser console

// const n = parseInt(prompt("enter a number: "));
// let sum = 0;
// for( let i = 1; i<=n; i++){
//     sum += i;
// }
// console.log(`the sum of the numbers 1 to ${n} is ${sum}`);