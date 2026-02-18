//내가 쓴 답
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
let arr = input[1].split(" ").map(Number);

const SC = Number(input[2]);
let idx = 3;

for (let i = 0; i < SC; i++) {
  const Gender = Number(input[idx]);
  const Num = Number(input[idx + 1]);

  // 남학생
  if (Gender === 1) {
    for (let j = Num; j <= N; j += Num) {
      arr[j - 1] = 1 - arr[j - 1];
    }
  }

  // 여학생
  else if (Gender === 2) {
    // 가운데 먼저 뒤집기
    arr[Num - 1] = 1 - arr[Num - 1];

    let left = Num - 2;
    let right = Num;

    while (
      left >= 0 &&
      right < N &&
      arr[left] === arr[right]
    ) {
      arr[left] = 1 - arr[left];
      arr[right] = 1 - arr[right];
      left--;
      right++;
    }
  }

  idx += 2;
}

// 출력 (20개씩 끊기)
for (let i = 0; i < N; i += 20) {
  console.log(arr.slice(i, i + 20).join(" "));
}

//백준 답
// const fs = require("fs");
// const input = fs.readFileSync(0).toString().trim().split("\n");

// const N = Number(input[0]);
// let arr = input[1].split(" ").map(Number);

// const SC = Number(input[2]);
// let idx = 3;

// for (let i = 0; i < SC; i++) {
//   const [Gender, Num] = input[idx].split(" ").map(Number);

//   if (Gender === 1) {
//     for (let j = Num; j <= N; j += Num) {
//       arr[j - 1] = 1 - arr[j - 1];
//     }
//   }

//   else if (Gender === 2) {
//     arr[Num - 1] = 1 - arr[Num - 1];

//     let left = Num - 2;
//     let right = Num;

//     while (left >= 0 && right < N && arr[left] === arr[right]) {
//       arr[left] = 1 - arr[left];
//       arr[right] = 1 - arr[right];
//       left--;
//       right++;
//     }
//   }

//   idx++;
// }

// for (let i = 0; i < N; i += 20) {
//   console.log(arr.slice(i, i + 20).join(" "));
// }