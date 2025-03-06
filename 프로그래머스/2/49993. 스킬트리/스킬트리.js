function solution(skill, skill_trees) {
    var answer = skill_trees.length;
    
    for(let i = 0; i<= skill_trees.length; i++) {
        let idx = -1;
        
        for(let j = 0; j<= skill_trees[i]?.length;j++){
            if(skill.indexOf(skill_trees[i][j]) !== -1){
                if(skill.indexOf(skill_trees[i][j])>idx && idx+1===skill.indexOf(skill_trees[i][j])){
                    idx=skill.indexOf(skill_trees[i][j]);
                    continue;
                }
                else{
                    answer--;
                    console.log(skill_trees[i])
                    break;
                }
            }
        }
    }
    
    return answer;
}