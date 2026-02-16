const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split(/\s+/);

const N = Number(input[0]);

for (let i = 1; i <= 9; i++){
    console.log(`${N} * ${i} = ${N * i}`) //문제까지 나오는 백준 답
    //console.log( N * i ) 일반 적인 답
}