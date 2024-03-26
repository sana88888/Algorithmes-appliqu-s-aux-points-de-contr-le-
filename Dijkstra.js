function dijkstra(graph, start) {
  let distances = {};
  for (let vertex in graph) {
    distances[vertex] = Infinity;
  }
  distances[start] = 0;

  let visited = {};

  function findMinVertex(distances, visited) {
    let minVertex = null;
    for (let vertex in distances) {
      if (
        !visited[vertex] &&
        (minVertex === null || distances[vertex] < distances[minVertex])
      ) {
        minVertex = vertex;
      }
    }
    return minVertex;
  }

  for (let i = 0; i < Object.keys(graph).length; i++) {
    let current = findMinVertex(distances, visited);
    visited[current] = true;

    for (let neighbor in graph[current]) {
      let distance = distances[current] + graph[current][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
      }
    }
  }

  return distances;
}
