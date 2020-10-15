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

    bfs(v) {
        const queue = [];
        const visitedNodes = {};
        const result = [];

        visitedNodes[v] = true;
        queue.push(v);

        while(queue.length > 0) {
            v = queue[0];
            result.push(v);
            queue.shift();

            for (let i = 0; i < this.adjacents[v].length; i++) {
                if (!visitedNodes[this.adjacents[v][i]]) {
                    visitedNodes[this.adjacents[v][i]] = true;
                    queue.push(this.adjacents[v][i]);
                }
            }
        }

        return result;
    }

    dfs(v) {
        const stack = [];
        const visitedNodes = {};
        const result = [];

        stack.push(v);
        visitedNodes[v] = true;

        while(stack.length > 0) {
            console.log(stack);
            const lastItem = stack.splice(stack.length-1, 1);
            v = lastItem[0];
            result.push(v);

            for (let i = 0; i < this.adjacents[v].length; i++) {
                if (!visitedNodes[this.adjacents[v][i]]) {
                    visitedNodes[this.adjacents[v][i]] = true;
                    stack.push(this.adjacents[v][i]);
                }
            }
        }

        return result;
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

console.log(graph.dfs(0));