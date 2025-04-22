// 입력 파일 전체 받아오기
const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split(" ");

// 입력 정제하기
let [n, k] = input.map(Number); // 숫자로 변환

// 문제 풀이 로직
function solution(n, k) {
  const visited = Array(n + 1).fill(0);
  const q = [n];
  visited[n] = 1;
  while (q.length) {
    const cur = q.shift();

    if (cur === k) {
      return console.log(visited[k] - 1);
    }

    const dx = [cur - 1, cur + 1, cur * 2];
    for (const nx of dx) {
      if (nx >= 0 && nx <= 100000 && !visited[nx]) {
        // 순간이동 0, 점프 1초 걸리는 거 구분
        if (nx === dx[2]) {
          visited[nx] = visited[cur];
          q.unshift(nx);
        } else {
          visited[nx] = visited[cur] + 1;
          q.push(nx);
        }
      }
    }
  }
}

solution(n, k);

// Flood Fill + BFS(최소 시간 경로)
