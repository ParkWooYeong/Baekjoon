const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[0];
const words = input.slice(1);

const uniqueWords = [...new Set(words)];

uniqueWords.sort((a, b) => {
    if (a.length !== b.length) {
        return a.length - b.length;
    }
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
});

console.log(uniqueWords.join('\n'));