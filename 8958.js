const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split(/\s+/);

const T = Number(input[0]);

for (let i = 1; i <= T; i++){
    const str = input[i];

    let cnt = 0;
    let sum = 0;

    for(let j = 0; j < str.length; j++){
        if (str[j] === 'O') {
            cnt++;
            sum += cnt;
        } else {
            cnt = 0;
        }
    }

    console.log(sum);
};
