function solution(people, limit) {
    var answer = 0;
    people.sort((a,b) => b-a); // 내림차순 정렬
    let left=0;
    let right=people.length-1;
    while(left<=right){
        if(limit-people[left]>=people[right]){
            right--;
        }
        left++;
        answer++;
    }
    return answer;
}

/*
<1차 시도>
최대 2명만 탑승 가능
인원만큼 순회하면서 최대한 같이 탈 수 있는 사람을 탐색해서 사람 배열에서 제거하면서 판단?

70 30 80 20 -> 80 70 30 20
80 60 30 30

내림차순 정렬 후, 가장 큰 값(앞)과 가장 작은 값(뒤)을 더해가며 체크
(최대 2명만 태울 수 있어서 가능한 방법)

<2차 시도>
시간을 줄이기 위해 2명 못태우는 것들은 굳이 탐색 안하고, 바로 카운트 반영하려 했지만 2명을 태울 수 있는 경우가 연속적으로 나오지 않아서 제대로된 로직이 아님

<2차 시도>
시간을 줄이기 위해 shift는 시간복잡도가 O(N)이라, 다른 연산 방법으로 해결
*/
