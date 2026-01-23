const fs = require("fs");
const input  = fs.readFileSync(0, "utf8").trim.split(/\s+/);

let min = Number(input[1]);
let max = Number(input[1]);

for (let i = 2; i < input.length; i++){
    const num = Number(input[i])

    if (num < min){
         min = num;
    }
    if (num > max){
        max = num;
    }
}

console.log(min,max)