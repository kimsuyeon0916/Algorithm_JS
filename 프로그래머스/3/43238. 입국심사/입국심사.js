function solution(n, times) {
    times.sort((a,b) => (a-b));
    let low = 0;
    let high = times[times.length-1]*n;
    while(low<=high){
        const mid=Math.floor((low+high)/2);
        const count = times.reduce((res,cur)=>res+Math.floor(mid/cur),0);
        if(count>=n) high=mid-1;
        else low=mid+1;
    }
    return low;
}

/*
// n, times의 수가 너무 커서, 무조건 최적화 탐색 해야 함 -> 이분탐색
1: [0,0] -> [7,10] -> 7
2: [7,0] -> [14,10] -> 
3: [0,3] -> [7,10]
4: [4,0] -> [11,10]
5: [0,6] -> [7,16]
6: [1,0] -> [8,10]
시간 누적을 어떻게 하지? 이렇게 접근하면 안됨..

최소 <= 될수 있는 시간 <= 최대
0 <= res <= 30
최대 시간 내에 통과할 수 있는 사람을 체크해가면서(나눠가면서) 최대 시간을 줄였을 때, 통과 몇명할 수 있는지로 접근
*/