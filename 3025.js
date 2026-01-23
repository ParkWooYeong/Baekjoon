const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split(/\s+/);


const arr = [];


for (let i = 0; i < input.length; i++){
    const r = Number(input[i]) % 42;

    if (!arr.includes(r)){
        arr.push(r);
    }
}
console.log(arr.length);