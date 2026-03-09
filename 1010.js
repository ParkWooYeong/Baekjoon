const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);

// DP를 이용한 조합 테이블 만들기 (최대 30x30)
const memo = Array.from(Array(30), () => Array(30).fill(0));

for (let i = 1; i < 30; i++) {
    for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
            memo[i][j] = 1;
        } else {
            memo[i][j] = memo[i - 1][j - 1] + memo[i - 1][j];
        }
    }
}

const results = [];
for (let i = 1; i <= T; i++) {
    const [N, M] = input[i].split(' ').map(Number);
    // M개 중에서 N개를 고르는 조합 (M C N)
    results.push(memo[M][N]);
}

console.log(results.join('\n'));