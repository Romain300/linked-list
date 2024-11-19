class LinkedList {
    constructor() {
        this.Head = null;
    };


    append(value) {
        const newNode = new Node(value);
        if(this.Head === null) {
            this.Head = newNode;
            return;
        } else {
            checkTail(this.Head);
        }
    
        //checking where is the tail to add node at the end of the list
        function checkTail(node) {
            if (node.nextNode === null) {
                node.nextNode = newNode;
                return;
            } else {
                checkTail(node.nextNode);
            };
        }
    };


    prepend(value) {
        const newNode = new Node(value);
        if(this.Head === null) {
            this.Head = newNode;
        } else {
            const currentHead = this.Head;
            newNode.nextNode = currentHead;
            this.Head = newNode;
        };
    }


    size() {
        let i = 0;
        if(this.Head === null) {
            return 0;
        } else {
            return checkEnd(this.Head);
        };

        //checking tail and i incrementation
        function checkEnd(node) {
            if (!node) {
                return i;
            } else {
                i++;
                return checkEnd(node.nextNode);
            }; 
        };
    };


    head() {
        return this.Head;
    };


    
    tail() {
        if(this.Head === null) {
            return this.Head;
        } else {
            return findTail(this.Head);
        }
        
        
        function findTail(node) {
            if(node.nextNode === null) {
                return node;
            } else {
                return findTail(node.nextNode)
            }
        };
    };


    at(index) {
        let i = 0;
        return findIndex(this.Head);

        function findIndex(node) {
            if(node) {
                i++;
                if(i !== index) {
                    return findIndex(node.nextNode)
                } else {
                    return node
                }
            } 
        };
    };


    pop() {
        if(this.Head === null || !this.Head.nextNode) {
            this.Head = null;
            return;
        } else {
            const newLastElement = this.at(this.size() - 1);
            newLastElement.nextNode = null
        };        
    };

    
    contains(value) {
        return checkValueNode(this.Head);

        function checkValueNode(node) {
            if(node) {
                if (node.value == value) {
                    return true;
                 } else {
                    return checkValueNode(node.nextNode)
                 };
            } else {
                return false;
            }      
        } ;
    };


    find(value) {
        let i = 0;
        return checkValueEqual(this.Head);

        function checkValueEqual(node) {
            if(node) {
                i++
                if(node.value == value) {
                    return i;
                } else {
                    return checkValueEqual(node.nextNode);
                }
            } else {
                return null;
            }
        };
    };


    toString() {

        let stringValue = "";
        const head = this.Head;
        if(this.Head !== null) {
            return concatValue(this.Head);
        } else {
            return null;
        }
        

        function concatValue(node) {
            if(node && node === head) {
                stringValue = stringValue.concat("", `( ${node.value} )`);
                return concatValue(node.nextNode) ;
            } else if(node && node.nextNode !== null) {
                stringValue = stringValue.concat(" -> ", `( ${node.value} )`);
                return concatValue(node.nextNode) ;
            } else if(node && node.nextNode === null) {
                stringValue = stringValue.concat(" -> ", `( ${node.value} ) -> null`);
                return concatValue(node.nextNode) ;
            } else {
                return stringValue;
            }    
        };
    };
};


class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    };
};


// example
const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());


