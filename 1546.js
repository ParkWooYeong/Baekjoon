const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split(/\s+/);

const N = Number(input[0]);
let max = Number(input[1]);

for (let i = 1; i <= N; i++){
    const score = Number(input[i]);

    if (score > max){
        max = score;
    }
};


let sum = 0

for (let i = 1; i <= N; i++){
    const score = Number(input[i]);
    const newScore = (score / max) * 100
    sum += newScore 
}
console.log(sum / N);