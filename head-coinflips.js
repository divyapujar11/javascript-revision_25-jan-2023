const readline = require('readline-sync');
let numFlips = readline.question("enter number of flips: ");

function headRatio(numFlips) {
    let headsCount = 0;
    for (let i = 0; i < numFlips; i++) {
        if (Math.random() < 0.5) {
            headsCount++;
        }
    }
    console.log(`Number of headsCount ${headsCount} / Number of numFlips ${numFlips} =`);
    return headsCount / numFlips;
}

console.log(headRatio(numFlips));