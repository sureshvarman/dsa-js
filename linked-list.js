class SinglyNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNext(node) {
        this.next = node;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {
        const node = new SinglyNode(value);
        if (this.head == null) {
            this.head = node
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next
            }

            current.setNext(node);
        }

        this.size++;
    }

    insertAt(value, index) {
        const node = new SinglyNode(value);

        let current = this.head;
        let currentIndex = 0;

        while(current.next) {
            currentIndex++;
            current = current.next;
            if (currentIndex >= index - 1) {
                break;
            }
        }

        const nextItem = current.next;
        node.setNext(nextItem);
        current.setNext(node);
    }

    removeAt(index) {
        let current = this.head;
        let previous = this.head;
        let currentIndex = 0;

        while(current.next) {
            if (currentIndex >= index) {
                break;
            }
            currentIndex++;
            previous = current;
            current = current.next;
        }

        previous.setNext(current.next);
    }

    print() {
        let currentNode = this.head;
        let str = "";
        while(currentNode.next) {
            str += currentNode.data + " ---> "
            currentNode = currentNode.next;
        }

        str += currentNode.data;

        console.log(str);
    }
}

const linkedList = new SinglyLinkedList();

linkedList.add("Start");
linkedList.add("Get bus");
linkedList.add("Go to work");
linkedList.add("Work is fun");
linkedList.add("Leave back to home");
linkedList.add("Do learning");

linkedList.insertAt("Take coffee", 3);
linkedList.removeAt(4);
linkedList.insertAt("Work is cool", 4);

linkedList.print()

/**
 * Doubly linked list is same as this, but instead required an additional pointer to point back.
 * Circular linked list is also same, but it requires tail to point head.
 */