class linkedList {
    constructor(list = {}) {
        this.list = list;
    };


    append(value) {
        const newNode = new node(value);
        if(Object.keys(this.list).length === 0) {
            this.list["head"] = newNode;
            return;
        } else {
            checkTail(this.list["head"]);
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
        const newNode = new node(value);
        if(Object.keys(this.list).length === 0) {
            this.list["head"] = newNode;
        } else {
            const currentHead = this.list["head"];
            newNode.nextNode = currentHead;
            this.list["head"] = newNode;
        };
    }


    size() {
        let i = 0;
        if(Object.keys(this.list).length === 0) {
            return 0;
        } else {
            return checkEnd(this.list["head"]);
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


    //Return node or value?
    head() {
        return this.list["head"];
    };


    //Return node or value?
    tail() {
        return findTail(this.list["head"]);
        
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
        return findIndex(this.list["head"]);

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
        if(!this.list["head"].nextNode) {
            this.list = {};
            return;
        }
        const newLastElement = findSecondLast(this.list["head"]);
        newLastElement.nextNode = null

        function findSecondLast(node) {
            if(node.nextNode.nextNode === null) {
                return node;
            } else {
                return findSecondLast(node.nextNode);
            }
        };
    };

    
    contains(value) {
        return checkValueNode(this.list["head"]);

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
        return checkValueEqual(this.list["head"]);

        function checkValueEqual(node) {
            i++;
            if(node) {
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
        const head = this.list["head"];
        return concatValue(this.list["head"]);

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


class node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    };
};


// example
const list = new linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());






