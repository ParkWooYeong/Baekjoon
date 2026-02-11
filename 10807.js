const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split(/\s+/);

const V = Number(input[input.length - 1]);
let sum = 0;

for(let i = 1;i < input.length -1; i++){
    const num = Number(input[i]);

    if (num === V){
        sum++;
    }
}
console.log(sum);