const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split(/\s+/)

const original = Number(input[0]);
let current = original;
let count = 0;

while (true) {

    let tens = Math.floor(current / 10);
    let ones = current % 10;

    let sum = tens + ones;

    current = ones * 10 + (sum % 10);

    count++;

    if (current === original) 
        break;
}

console.log(count);