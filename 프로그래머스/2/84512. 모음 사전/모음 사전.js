const 사전 = [];

const 사전만들기 = (잔여, 선별=[], k) => {
	if(선별.length === k){
		return 사전.push(선별.join('')); // 선별 배열 원소 문자열로 합치고 결과 배열에 넣기
	}
	잔여.forEach((원소, idx) => {
		사전만들기(잔여, [...선별, 원소], k);
	})
}

function solution(word) {
    var answer = 0;
    for(let i=1; i<=5; i++){
        사전만들기(['A', 'E', 'I', 'O', 'U'], [], i)
    }
    사전.sort(); // 사전식 정렬
    answer = 사전.indexOf(word)+1;
    return answer;
}

/*
중복순열 이용해서 사전 만들고 정렬한 뒤, 해당 사전에서 word 위치 찾아내자
*/