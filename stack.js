class Stack {
    constructor(array) {
        this.head = 0;
        this.tail = array.length - 1;
        this.data = {};

        for (let i = 0; i < array.length; i++) {
            this.data[i] = {data: array[i]};
        }
    }

    push(d) {
        this.tail++;
        this.data[this.tail] = {data: d};
        return this.data;
    }

    pop() {
        const data = this.data[this.tail];
        delete this.data[this.tail];
        this.tail--;
        return data
    }
}

const stack = new Stack([1,2,3,4,5,6]);

console.log(stack.pop());

console.log(stack.push(7));