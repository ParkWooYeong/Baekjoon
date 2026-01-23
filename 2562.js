const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split(/\s+/);

let max = Number(input[0]);
let id = 0

for(let i = 1; i < input.length; i++){
    const num = Number(input[i])

    if (num > max){
        max = num;
        id = i
    }
}
console.log(max);
console.log(id +1);