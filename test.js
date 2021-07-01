var aStar = require('.').aStar;
var createGraph = require('ngraph.graph');

let graph = createGraph();

graph.addNode(1, {x: 0, y: 0});
graph.addNode(2, {x: 1, y: 0});
graph.addNode(3, {x: 4, y: 1});
graph.addNode(4, {x: 4, y: 2});
graph.addNode(5, {x: 5, y: 0});
graph.addNode(6, {x: -1, y: 0});

graph.addLink(1, 2);
graph.addLink(1, 6);
graph.addLink(2, 3);
graph.addLink(2, 4);
graph.addLink(3, 5);
graph.addLink(4, 5);

var pathFinder = aStar(graph, {
  distance(fromNode, toNode) {
    let dx = fromNode.data.x - toNode.data.x;
    let dy = fromNode.data.y - toNode.data.y;
    
    return Math.sqrt(dx * dx + dy * dy);
  },
  heuristic(fromNode, toNode) {
    let dx = fromNode.data.x - toNode.data.x;
    let dy = fromNode.data.y - toNode.data.y;
    
    return Math.sqrt(dx * dx + dy * dy);
  }
});

let path = pathFinder.find(1,5);
console.log(path);