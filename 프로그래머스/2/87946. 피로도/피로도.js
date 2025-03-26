let output = []

const 순열 = (rests, burket=[]) => {
    if (rests.length == 0) {
        return output.push(burket);
    }
    rests.forEach((v,idx) => {
        const rest = [...rests.slice(0,idx), ...rests.slice(idx+1)]
        순열(rest, [...burket,v]);
    })
}


function solution(k, dungeons) {
    var answer = 0;
    순열(dungeons)
    
    for(let i=0; i<output.length; i++){
        let 현재피로도 = k;
        let count = 0;
        for(let j=0; j<dungeons.length; j++){
            // 최소 피로도가 작은 경우
            if(현재피로도<output[i][j][0]) {
               break;
            }
            
            현재피로도-=output[i][j][1]
            count++;
        }
        answer = Math.max(answer, count); 
    }

    return answer;
}


// 그리디 같기도 함

// 던전 최대 개수가 8개 => 정 안되면 경우를 다 따져볼만도 하는?
// 최소 필요 피로도로 정렬 필요
// 최소 필요 피로도가 같은 경우, 소모 필요도로 정렬 필요

// 규칙화 및 일반화 할 수 없는 듯?
// 규칙모든 순열의 경우의 수 중에서, 최대를 구하는건가?

// 큐를 써서 꺼낼 수 있는 경우?
