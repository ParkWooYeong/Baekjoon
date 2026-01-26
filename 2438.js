const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split(/\s+/);

const N = Number(input[0]);

for(let i = 1; i <= N; i++){
    let line = "";
    
    for(let j = 0; j < i; j++){
        line += "*";
    }
    console.log(line);

}
