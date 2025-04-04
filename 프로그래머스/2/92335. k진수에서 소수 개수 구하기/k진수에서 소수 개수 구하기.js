const 소수체크 = (num) => {
    if(num==1) return false; // 일치비교(===)하면, 숫자만 해당. 자연스럽게 암묵적 타입 변환 하려, 동등비교(==)해야 함.
    for(let i=2; i<=Math.floor(Math.sqrt(num)); i++){
        if(num%i===0) return false;
    }
    return true;
}

const 진법계산 = (num, k) => {
    let res = '';
    while(num>=k){
        res=res.padStart(res.length+1, num%k);
        num=Math.floor(num/k);
    }
    res=res.padStart(res.length+1, num); // 마지막 몫 앞에 붙이기
    return res;
}

function solution(n, k) {
    var answer = 0;
    const 진수 = 진법계산(n, k);
    const 숫자배열 = 진수.split('0'); // 0 기준으로 문자열 자르기

    for(let i=0; i<숫자배열.length; i++){
        if(숫자배열[i]==='') continue;
        if(소수체크(숫자배열[i])) answer+=1;
    }
    return answer;
}

// 숫자에 0을 기준으로 문자 잘라서 소수 체킹
// 1. 진법 바꾸고, 2. 0 기준으로 문자 잘라서, 3. 소수 체크
// 암묵적 타입 변환 이용해서 숫자 <-> 문자열

// 시간초과 나는 이유가, 최대 n이 1,000,000 라서? 중첩 반복문이 n^2되면 안되나? 소수 구하는 로직을 최적화?
