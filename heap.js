class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    setLeft(node) {
        this.left = node;
    }
    
    setRight(node) {
        this.right = node;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    add (value) {
        const node = new Node(value);

        if (this.root == null) {
            this.root = node
        } else {
            this._insertNode(this.root, node);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.data > node.data) {
            if (node.right == null) {
                node.setRight(newNode)
            } else {
                this._insertNode(node.right, newNode);
            }
        } else {
            if (node.left == null) {
                node.setLeft(newNode);
            } else {
                this._insertNode(node.left, newNode);
            }
        }
    }

    minHeapify() {
        this.root = this._minHeapify(this.root);
    }

    _minHeapify(node) {
        if (node.data.left && node.data > node.left.data) {
            node = this._minHeapify(node.left);

            return node;
        } else if (node.data.right && node.data > node.right.data) {
            node = this._minHeapify(node.right);

            return node;
        } else {
            return node;
        }
    }

    traverse() {
        console.log(this.root);
    }
}

const tree = new Tree();

tree.add(100);
tree.add(90);
tree.add(200);
tree.add(190);
tree.add(202);
tree.add(80);
tree.add(91);
tree.add(201);
tree.add(203);

// tree.add(100);
// tree.add(90);
// tree.add(80);

tree.traverse();

tree.minHeapify();

tree.traverse();