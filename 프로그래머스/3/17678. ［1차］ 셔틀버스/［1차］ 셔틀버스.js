const 분계산 = (t) => {
    const [h, m] = t.split(":").map(Number);
    return (h*60+m);
}

const 시간계산 = (m) => {
    const date = new Date();
    date.setHours(m/60);
    date.setMinutes(m%60);
    return date.toTimeString().slice(0,5);
}

function solution(n, t, m, timetable) {
    var answer = '';
    const busTimetable = Array.from({length: n}, (_, idx) => 540+(t*idx)); // 셔틀 버스 운행 시간 배열
    const crewTimetable = timetable.map((v) => 분계산(v)).sort((a, b) => a - b);

    for(let i=0; i< n; i++){
        // 가장 마지막 셔틀인 경우
        if(i===n-1){
            console.log(crewTimetable);
            answer = busTimetable[i]; // 초기 기본값
            
            // 대기 크루 체크
            const arr = [];
            for(let j=0; j<Math.min(m, crewTimetable.length); j++){
                if(crewTimetable[j]>busTimetable[i]) break;
                arr.push(crewTimetable[j]);
            }
            if(arr.length === m){
                answer = arr[arr.length-1]-1;
            }
            
            
            return 시간계산(answer);
        }
        // 마지막 셔틀이 아닌 경우
        else{
            for(let j = 0; j<m; j++){
                if(busTimetable[i]>=crewTimetable[j]){
                    crewTimetable.shift(); // 보낼 수 있는 크루 버스 태우기
                }
                else{
                    break;
                }
            }
        }
    }  
     
    
    return answer;
}

// 문제가 이해가 안됨ㅋㅋ 이해하는 데 15분 걸림;
// 셔틀은 9시부터, 크루는 결국 사람

// 셔틀 운행 시간표 구하고, 그 시간내에서 버스 타야 함


// [전처리] 시간은 문자열로 다루기 힘드니, 분으로 다 바꾸고 계산 ⭐️
// n<=10 이라서 정 안되면 노가다 구현 가능;


// n=1, t=1, m=3
// 9:00

// 00:00 00:01 00:02 00:03

// 00:00 00:01 9:00 9:01

// 00:00 00:01 9:03 9:04