function solution(n, s) {
    var answer = [-1];
    let 몫 = Math.floor(s/n);
    let 나머지 = s%n;
    
    if(몫===0) return answer;
    
    answer = Array(n).fill(몫);
    for(let i=0;i<answer.length && 몫>0;i++){
        if(나머지>0){
            answer[i]+=1;
            나머지--;
        }
    }
    answer.sort((a,b) => a-b);
    return answer;
}

// 처음엔 조합인가? 싶었음. 근데 한 숫자를 다 분배해서 구현하기 어려움...
// 규칙을 찾아보니 가장 골고루 분배한게 가장 큼

// 3 10 => 4 3 3 몫: 3