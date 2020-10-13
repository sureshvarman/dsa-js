class Graph {
    constructor() {
        this.noOfGraphs = 0;
        this.adjacents = {}
    }

    add(node) {
        this.adjacents[node] = [];
    }

    adjacent(node1, node2) {
        this.adjacents[node1].push(node2);
        this.adjacents[node2].push(node1);
    }

    print() {
        console.log(this.adjacents);
    }
}

const graph = new Graph();
graph.add(0);
graph.add(1);
graph.add(2);
graph.add(3);
graph.add(4);
graph.add(5);
graph.add(6);

graph.adjacent(0, 1);
graph.adjacent(0, 2);
graph.adjacent(1, 2);

graph.adjacent(1, 3);
graph.adjacent(2, 4);
graph.adjacent(3, 4);
graph.adjacent(4, 5);
graph.adjacent(5, 6);


graph.print();