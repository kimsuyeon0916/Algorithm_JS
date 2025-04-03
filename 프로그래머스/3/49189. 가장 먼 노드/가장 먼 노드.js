function solution(n, edge) {
    var answer = 0;
    const graph = Array.from(Array(n+1), () => []);
    for(let [from, to] of edge){
        graph[from].push(to);
        graph[to].push(from);
    }
    
    const visited = Array(n+1).fill(0);
    const q = [1]; // n이 작으니 배열로 큐 구현
    visited[1]=1; // 시작 노드 방문
    while(q.length){
        const cur=q.shift();
        for(const next of graph[cur]){
            if(!visited[next]){
                visited[next]=visited[cur]+1;
                q.push(next);
            }
        }
    }
    
    const max=Math.max(...visited);
    answer=visited.filter((v)=>v===max).length;
        
    return answer;
}

// 가장 멀리 떨어진 노드의 개수 -> 각 정점마다의 최단거리(bfs) 구해서, 그 중 가장 큰 거 카운트
