const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split(/\s+/);

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

const result = A * B * C;
const str = String(result);
const count = Array(10).fill(0);

for(let i = 0; i < input.length; i++){
    const di = Number(str[i]);
    count[di]++;
}
for (let i = 0; i < 10; i++) {
    console.log(count[i]);
}