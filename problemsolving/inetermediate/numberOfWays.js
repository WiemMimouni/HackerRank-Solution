function numberOfWays(roads) {
  const n = roads.length + 1;
  const graph = new Array(n).fill(0).map(() => new Array(n).fill(false));

  for (let i = 0; i < roads.length; i++) {
    const [city1, city2] = roads[i];
    graph[city1 - 1][city2 - 1] = true;
    graph[city2 - 1][city1 - 1] = true;
  }

  let count = 0;

  for (let city1 = 0; city1 < n; city1++) {
    for (let city2 = city1 + 1; city2 < n; city2++) {
      for (let city3 = city2 + 1; city3 < n; city3++) {
        const d1 = distance(graph, city1, city2);
        const d2 = distance(graph, city2, city3);
        const d3 = distance(graph, city1, city3);

        if (d1 === d2 && d1 === d3) {
          count++;
        }
      }
    }
  }

  return count;
}

function distance(graph, start, end) {
  const visited = new Array(graph.length).fill(false);
  const queue = [];
  queue.push(start);
  visited[start] = true;
  let dist = 0;

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const current = queue.shift();
      if (current === end) {
        return dist;
      }
      for (let neighbor = 0; neighbor < graph[current].length; neighbor++) {
        if (graph[current][neighbor] && !visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
    dist++;
  }

  return -1;
}
