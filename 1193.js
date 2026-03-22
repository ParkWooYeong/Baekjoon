const fs = require('fs');
let input = Number(fs.readFileSync(0,"utf8").toString().trim());

let line = 1;

while (input > line) {
    input -= line;
    line++;
}

if (line % 2 === 0) {
    console.log(`${input}/${line - input + 1}`);
} else {
    console.log(`${line - input + 1}/${input}`);
}