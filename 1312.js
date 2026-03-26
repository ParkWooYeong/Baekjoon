const fs = require('fs');
const input = fs.readFileSync(0,"utf8").toString().trim().split(' ');

let A = parseInt(input[0]);
const B = parseInt(input[1]);
const N = parseInt(input[2]);

let remainder = A % B;
let result = 0;

for (let i = 0; i < N; i++) {
    remainder *= 10;
    result = Math.floor(remainder / B);
    remainder %= B;
}

console.log(result);