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

    _isCycle(v, visited, parent) {
        visited[v] = true;

        for (let node of this.adjacents[v]) {

            console.log(v, node, visited, parent);

            if (!visited[node]) {
                if (this._isCycle(node, visited, v)) {
                    return true;
                }
            } else if (node != parent) {
                return true;
            }
        }

        return false;
    }

    isTree() {
        let visited = {}, isCycle = true;

        for (let v in this.adjacents) {
            visited[v] = false;
        }

        if(this._isCycle(Object.keys(this.adjacents)[0], visited, null)) {
            return false;
        }

        for (let v in this.adjacents) {
            if (!visited[v]) return false;
        }

        return true;
    }
}

const graph = new Graph();
graph.add(0);
graph.add(1);
graph.add(2);
graph.add(3);
graph.add(4);

graph.adjacent(0, 1);
graph.adjacent(0, 2);
graph.adjacent(2, 3);
graph.adjacent(3, 4);

console.log(graph.isTree());