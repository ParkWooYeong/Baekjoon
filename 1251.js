const fs = require('fs');
const input = fs.readFileSync(0,"utf8").toString().trim();

let results = [];


for (let i = 1; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
        
        let part1 = input.slice(0, i);
        let part2 = input.slice(i, j);
        let part3 = input.slice(j);

        let word = 
            [...part1].reverse().join('') +
            [...part2].reverse().join('') +
            [...part3].reverse().join('');

        results.push(word);
    }
}

results.sort();
console.log(results[0]);