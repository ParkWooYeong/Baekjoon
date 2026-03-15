const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const X = parseInt(input);
const binary = X.toString(2);

const result = binary.split('0').join('').length;

console.log(result);