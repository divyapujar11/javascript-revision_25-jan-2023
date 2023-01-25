let currentYear = new Date().getFullYear();
let count = 0;
while (count < 20) {
    if (currentYear % 4 == 0 && (currentYear % 100 != 0 || currentYear % 400 == 0)) {
        console.log(currentYear);
        count++;
    }
    currentYear++;
}

// console.log(" 1 != '1' " + (1 != '1'));
// console.log(" 1 !== '1' " + (1 !== '1'));