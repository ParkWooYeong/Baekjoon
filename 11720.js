const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split(/\s+/);

const str = input[1];
let sum = 0;

for(let i = 0; i < str.length; i++){
    sum += Number(str[i]);
}

console.log(sum);