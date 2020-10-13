class Queue  {
    constructor() {
        this.value = [];
        this.length = 0;
    }

    enQueue(value) {
        this.value.push(value);
        this.length++;
    }

    deQueue() {
        const value = this.value.shift();
        this.length--;
        return value ? value : null;
    }

    getSize() {
        return this.length;
    }
}


class Node {
    constructor(value) {
        this.value = value;
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

class BinaryTree {
    constructor() {
        this.root = null;

        this.queue = new Queue();
    }

    addNode(value) {
        const node = new Node(value);

        if (!this.root) {
            this.root = node;
        } else {
            this._insertNode(this.root, node);
        }
    }

    find(value) {
        const node = this._lookup(this.root, value);

        if(!node) {
            console.log(`${value} not found..`);
            return ;
        }

        console.log(node);
    }

    _lookup(currentNode, value) {
        if (!currentNode) {
            return null;
        }
        else if (currentNode.value == value) {
            return currentNode;
        } else if (value > currentNode.value) {
            return this._lookup(currentNode.right, value);
        } else if (value < currentNode.value) {
            return this._lookup(currentNode.left, value);
        }

        return null;
    }

    _insertNode(currentNode, node) {
        if (node.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.setLeft(node);
            } else {
                this._insertNode(currentNode.left, node);
            }
        } else {
            if (!currentNode.right) {
                currentNode.setRight(node);
            } else {
                this._insertNode(currentNode.right, node);
            }
        }
    }

    remove(value) {
        this.root = this._remove(this.root, value);
    }

    _isLeafNode(node) {
        if (!node.left && !node.right) {
            return true;
        }

        return false;
    }

    _findMin(node) {
        let resultNode = node;

        while(resultNode && resultNode.left) {
            resultNode = resultNode.left;
        }

        return resultNode;
    }

    _remove(currentNode, value) {
        if (!currentNode) {
            return null
        } else if (currentNode.value == value) {
            if (this._isLeafNode(currentNode)) {
                return null;
            } else if (currentNode.left == null) {
                return currentNode.right;
            } else if (currentNode.right == null) {
                return currentNode.left;
            } else {
                const tmpNode = this._findMin(currentNode.right);
                currentNode.value = tmpNode.value;
                currentNode.right = this._remove(currentNode.right, tmpNode.value);
                return currentNode;
            }
        } else if (value > currentNode.value) {
            currentNode.right = this._remove(currentNode.right, value);
            return currentNode;
        } else if (value < currentNode.value) {
            currentNode.left = this._remove(currentNode.left, value);
            return currentNode;
        }

        return null;
    }
    stringify() {
        console.log(JSON.stringify(this.root));
    }

    _height(node) {
        if (!node) {
            return 0;
        }

        const leftHeight = this._height(node.left);
        const rightHeight = this._height(node.right);

        const max = leftHeight > rightHeight ? leftHeight : rightHeight;

        return 1 + max;
    }

    levelOrderQueue() {
        // BFS
        this.queue.enQueue(this.root);
        let result = [];

        while(this.queue.getSize()) {
            const row = [];
            let size = this.queue.getSize();

            while (size > 0) {
                const currentValue = this.queue.deQueue();

                if (currentValue) {
                    row.push(currentValue.value)

                    if (currentValue.left) {
                        this.queue.enQueue(currentValue.left);
                    }

                    if (currentValue.right) {
                        this.queue.enQueue(currentValue.right);
                    }
                }
                size--;
            }

            result.push(row);
        }

        console.log(result);
    }

    levelOrder() {
        const height = this._height(this.root);

        for (let i = 1; i <= height; i++) {
            this._levelOrder(this.root, i);
        }
    }

    _levelOrder(currentNode, level) {
       if (!currentNode) {
           return
       }

       if (level == 1) {
           console.log(currentNode.value);
       } 
       else
       { 
           this._levelOrder(currentNode.left, level-1); 
           this._levelOrder(currentNode.right, level-1);
       } 
    }

    preOrder() {
        let result = [];

        this._preOrder(this.root, result);

        console.log(result);
    }

    _preOrder(node, result) {
        if (!node) {
            return;
        }

        result.push(node.value);

        if (node.left) {
            this._preOrder(node.left, result);
        }

        if (node.right) {
            this._preOrder(node.right, result);
        }
    }

    postOrder() {
        let result = [];

        this._postOrder(this.root, result);

        console.log(result);
    }

    inOrder() {
        let result = [];

        this._inOrder(this.root, result);

        console.log(result);
    }

    _inOrder(node, result) {
        if (!node) {
            return;
        }

        if (node.left) {
            this._inOrder(node.left, result);
        }

        result.push(node.value);

        if (node.right) {
            this._inOrder(node.right, result);
        }
    }

    _postOrder(node, result) {
        if (!node) {
            return;
        }

        if (node.left) {
            this._postOrder(node.left, result);
        }

        if (node.right) {
            this._postOrder(node.right, result);
        }

        result.push(node.value);
    }
}


const bTree = new BinaryTree();
bTree.addNode(10);
bTree.addNode(9);
bTree.addNode(8);
bTree.addNode(7);
bTree.addNode(13);
bTree.addNode(11);
bTree.addNode(14);

bTree.stringify();

//bTree.remove(10);

//bTree.levelOrder();

//bTree.levelOrderQueue();

bTree.preOrder();
bTree.postOrder();
bTree.inOrder();

//bTree.find(11);