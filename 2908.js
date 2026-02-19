const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split(/\s+/);

const [A, B] = input;

const reverA = Number(A.split("").reverse().join(""));
const reverB = Number(B.split("").reverse().join(""));

console.log(Math.max(reverA,reverB));