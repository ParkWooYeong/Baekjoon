const fs = require("fs");
const input = fs.readFileSync(0,'utf8').trim().split(/\s+/);

const X = Number(input[1]);
const result = [];


for (let i = 2; i < input.length; i++) {
    const num = Number(input[i]);

    if (num < X){
        result.push(num);
    }
}

console.log(result.join(" "));