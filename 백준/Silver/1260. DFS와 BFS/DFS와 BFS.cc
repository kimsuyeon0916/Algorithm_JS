#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
#define FASTIO ios::sync_with_stdio(false), cin.tie(0), cout.tie(0)
using namespace std;

void DFS(int V);
void BFS(int start);

vector<int> graph[1001];
bool visited[1001]={0,};
int main()
{
  FASTIO;
  int N,M,V;
  cin >> N >> M >> V;
  int u, v;
  for(int i=1;i<=M;i++){
    cin >> u >> v;
    graph[u].emplace_back(v);
    graph[v].emplace_back(u);
  }

  for(int i=1;i<=N;i++) sort(graph[i].begin(), graph[i].end());
  DFS(V);
  cout << '\n';
  BFS(V);
  return 0;
}

void DFS(int V){
  visited[V]=true;
  cout << V << " ";
  for(int vertex:graph[V]){
    if(!visited[vertex]) DFS(vertex);
  }
}

void BFS(int start){
  fill_n(visited, 1001, false); //배열 초기화
  queue<int> q;
  q.emplace(start);
  visited[start]=true;
  cout << start << " ";
  while (!(q.empty())){
    int cur=q.front();
    q.pop();
    for(int vertex:graph[cur]){
      if(!visited[vertex]){
        q.emplace(vertex);
        visited[vertex]=true;
        cout << vertex << " ";
      }
    }
  }
  
}