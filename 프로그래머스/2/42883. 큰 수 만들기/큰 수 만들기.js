function solution(number, k) {
    var answer = '';
    let stack = [];

    for (let num of number) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < num) {
            stack.pop();
            k--;
        }
        stack.push(num);
    }

    // k가 남아있다면 뒤에서 제거
    answer =  stack.slice(0, stack.length - k).join('');
    return answer;
    
}