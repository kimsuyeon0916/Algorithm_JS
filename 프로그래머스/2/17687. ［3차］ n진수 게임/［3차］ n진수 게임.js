function solution(n, t, m, p) {
    let res=''
    let str=''
    for(let i=0; str.length<=t*m; i++){
        str+=i.toString(n);
    }
    for(let j=0; j<t; j++){
        res+=str[m*j+(p-1)];
    }
    return res.toUpperCase();
}

/*
1) t,m,p 이용해서 최대 특정숫자까지 구한다고 생각하고
2) 0~숫자까지 진법 바꾸고 이어붙이면서 t*m 길이 됐으면 이어붙이는거 멈추고
3) m,p 체크하며 t개수까지 문자빼오기
*/

// t=4, m=2 -> 4*2=8 최대 숫자 8까지는 구해봐야 함
// 0 1 10 11 100 ... -> 8 넘었으니 멈추고
// 011011100 -> 0111 빼오기
