

function solution(n)
{
    var ans = 1;
    
    let num = n;
    while(num>1){
        if(num%2!==0) ans+=1;
        num = Math.floor(num/2);
    }

    return ans;
}

// 점프하면 건전지 k만큼 사용, 순간이동은 사용 X
// 그리디인가? 최대한 순간이동(/2) 이용하는게 최소화. 그걸 안나눠질때까지 반복하면서 최소 점프 누적 계산

/*
5/2 = 2 answer+=1;
2/2 = 1 answer+=1;

6/2 = 3
3/2 = 1 answer+=1; answer+=1;

5000/2 = 2500
2500/2 = 1250
1250/2 = 625
625/2 = 312 answer+=1;
312/2 = 156
156/2 = 78
78/2 = 39 
39/2 = 19 answer+=1;
19/2 = 9 answer+=1;
9/2 = 4 answer+=1;
4/2 = 2
2/2 = 1; answer+=1;
*/