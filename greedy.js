class Graph {
    constructor() {
        this.noOfGraphs = 0;
        this.adjacents = {}
        this.cost = {};
    }

    add(node) {
        this.adjacents[node] = [];
    }

    adjacent(node1, node2, cost) {
        this.adjacents[node1].push(node2);

        if (!this.cost[node1]) {
            this.cost[node1] = {};
        }

        this.cost[node1][node2] = cost;
    }

    bfs(source, destination) {
        const distance = {};
        const visited = {};
        const queue = [];

        let count = 0

        const vertices = Object.keys(this.adjacents);
        for (let i = 0; i < vertices.length; i++) {
            distance[vertices[i]] = 999999;
        }
        distance[source] = 0;

        queue.push(source);

        while(queue.length) {
            let vertix = queue.splice(0, 1);
            vertix = vertix[0];

            console.log("BFS====>", count++);

            for (let i = 0; i < this.adjacents[vertix].length; i++) {
                    const adjacent = this.adjacents[vertix][i];

                    if (!visited[vertix]) {
                        const currentDistance = distance[vertix];
                        const currentCost = this.cost[vertix][adjacent];

                        const totalCost = currentDistance + currentCost;

                        // d[u] + c[u,v] < d[v]
                        if (totalCost < distance[adjacent]) {
                            distance[adjacent] = totalCost;
                        }

                        queue.push(adjacent);
                    }
            }

            visited[vertix] = true;
        }

        console.log(distance);

        console.log(`Minimum distance from ${source} to ${destination} is :`, distance[destination]);
    }

    _min(set) {
        return set.sort((pre, cur) => {
            return pre.d-cur.d;
        })
    }

    dijkstra(source, destination) {
        const distance = {};
        const visited = {};
        let heap = [];

        let count = 0;

        const vertices = Object.keys(this.adjacents);
        for (let i = 0; i < vertices.length; i++) {
            distance[vertices[i]] = 999999;
        }

        distance[source] = 0;
        
        heap.push({
            d: 0, 
            v: source
        });

        heap = this._min(heap);

        while(Object.keys(visited).length < vertices.length) {
            const {d, v} = heap[0];
            visited[v] = true;

            console.log("DJ====>", count++);

            heap.splice(0,1);

            for(let i = 0; i < this.adjacents[v].length; i++) {
                const adjacent = this.adjacents[v][i];
                const currentCost = this.cost[v][adjacent];

                const totalCost = d + currentCost;

                if (distance[adjacent] > totalCost) {
                    distance[adjacent] = totalCost;
                }

                heap.push({
                    d: distance[adjacent],
                    v: adjacent
                })

                heap = this._min(heap);
            }
        }

        console.log(distance);
    }

    print() {
        console.log(this.adjacents);
        console.log(this.cost);
    }
}

const graph = new Graph();


graph.add("A");
graph.add("B");
graph.add("C");
graph.add("D");
graph.add("E");
graph.add("F");
graph.add("G");

graph.adjacent("A", "C", 100);
graph.adjacent("A", "B", 3);
graph.adjacent("A", "D", 4);
graph.adjacent("D", "C", 3);
graph.adjacent("D", "E", 8);
graph.adjacent("E", "F", 10);
graph.adjacent("B", "G", 9);
graph.adjacent("E", "G", 50);

// implemented using BFS
// doesnt work with negative values
console.time("start");
graph.bfs("A", "E");
graph.dijkstra("A", "E");
console.timeEnd("start");
