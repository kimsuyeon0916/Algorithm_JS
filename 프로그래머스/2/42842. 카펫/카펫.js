const 약수배열구하기 = (num) => {
    let result = []
    let index = 1;
    while (index <= num / 2) {
      if (num % index === 0) result.push(index)
      index++
    }
    result = [...result, num] 
    return result;
}

function solution(brown, yellow) {
    var answer = [];
    const sum = brown + yellow;
    
    const arr = 약수배열구하기(yellow);
    
    for(let i=arr.length-1; i>=0; i--){
        const a = arr[i];
        const b = yellow / a;

        if((a+2)*(b+2)===sum){
            answer.push(a+2);
            answer.push(b+2);
            
            return answer;
        }
    }
}

// 2 1 -> 4 * 3 = 10 + 2
// 1 1 -> 3 * 3 = 8 + 1
// 8 3 -> 10 * 5 != 24 + 24
// 6 4 -> 8 * 6 = 24 + 24