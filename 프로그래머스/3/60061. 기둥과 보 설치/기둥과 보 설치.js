const 규칙만족 = (x, y, a, answer) => {
    if (a === 0) { // 기둥인 경우
        if (y === 0 || answer.find(([l, m, n]) => (l === x - 1 && m === y && n === 1) || ( l === x && m === y && n === 1) || (l === x && m === y - 1 && n === 0))) {
            return true;
        }
    }
    else { // 보인 경우
        if (
            answer.find(([l, m, n]) => (l === x && m === y - 1 && n === 0) || 
            (l === x + 1 && m === y - 1 && n === 0)) || 
            (answer.find(([l, m, n]) => (l === x - 1 && m === y && n === 1)) && 
             answer.find(([l, m, n]) => (l === x + 1 && m === y && n === 1)))) {
            return true;
        }
    }
    return false;
}



function solution(n, build_frame) {
    let answer = [];
    
    for (let i = 0; i < build_frame.length; i++) {
        const [x, y, a, b] = build_frame[i];
        // 설치 시
        if (b === 1) {
            if (규칙만족(x, y, a, answer)) answer.push([x, y, a]);
        }
        // 삭제 시
        else {
            const 삭제후배열 = answer.filter(([l, m, n]) => !(l === x && m === y && n === a));
            
            let 삭제가능 = true;
            for (let j = 0; j < 삭제후배열.length; j++) {
                const [x, y, a] = 삭제후배열[j];
                if (!규칙만족(x, y, a, 삭제후배열)) {
                    삭제가능 = false;
                    break;
                }
            }
            
            answer = 삭제후배열;
            if (!삭제가능) {
                answer.push([x, y, a]); // 삭제 못하면 다시 추가
            } 
        }
    }
    
    return answer.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
}

/* 
<1차 시도>
build_frame 주어진 순서대로 탐색하며, 설치/삭제 가능한지 따져가며 결과 배열에 넣기
설치: 기둥일 때는 아래, 보일때는 왼쪽이 보/기둥/없음인지 확인 후 오른쪽 따질 지 확인하고 결과 배열에 추가
삭제: 기둥의 아래/위 혹은 보의 좌/우에 연결된 걸 찾아서 파악하기엔 복잡 -> 삭제 됐다고 생각하고 삭제하고 남은 결과 배열들의 요소들을 설치할 때랑 똑같이 조건 따져서 되는 경우에만 삭제 반영

<2차 시도>
놓친 조건: 기둥인 경우에, 보의 끝부분이 아니고 보의 시작부분에 기둥이 세워져도 됨

<3차 시도>
놓친 조건: x, y좌표가 모두 같은 경우 기둥(0)이 보(1)보다 앞에 와야 함

<4차 시도>
고려한 부분: 시간초과가 났으므로, 규칙만족하는 로직을 최적화
*/
