/**
 * in a standar queue, when an elecment is removed, the space will not available
 * in circular queue, the elements in the proceeding will be filled.
 */

class Queue {
    constructor(array) {
        this.head = 0;
        this.tail = array.length - 1;
        this.data = {};

        for (let i = 0; i < array.length; i++) {
            this.data[i] = {data: array[i]};
        }
    }

    enqueue(d) {
        this.tail++;
        this.data[this.tail] = {data: d};
        return this.data;
    }

    dequeue() {
        const data = this.data[this.head];
        delete this.data[this.head];
        this.head++;
        return data
    }
}

const queue = new Queue([1,2,3,4,5,6]);

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.enqueue(7));