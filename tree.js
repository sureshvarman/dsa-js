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

    remove(key) {
        this.root = this._removeNode(this.root, key);
    }

    /**
     * TO find minimum node in the hierarchy, minimum will always be in left in binary search tree
     * @param {Node} node 
     */
    _findMinNode(node) {
        if (node == null || node.left == null) {
            return node;
        }

        return this._findMinNode(node.left);
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

    _removeNode(node, key) {
        if (node == null) {
            return null;
        } else if(key > node.data) {
            node.right = this._removeNode(node.right, key);
            return node;
        } else if(key < node.data) {
            node.left = this._removeNode(node.left, key);
            return node;
        } else if (node.data == key) {
            if (node.left !== null && node.right == null) {
                return node.left;
            } else if (node.right !== null && node.left == null) {
                return node.right;
            } else if (node.left !== null && node.right !== null) {
                /**
                 * if both the child are present, find the miimum node from right and replace it with
                 * the actual node
                 */
                const temp = this._findMinNode(node.right);
                node.data = temp.data;

                /**
                 * from the node traverse right and find the added data and remove
                 * and return its child and repeat this step further.
                 */
                node.right = this._removeNode(node.right, temp.data);

                return node;
            }
        } else {
            return null;
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

tree.traverse();

tree.remove(200);

tree.traverse();