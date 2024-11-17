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
            this.list["head"] === newNode;
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
            checkEnd(this.list["head"]);
            return i;
            
        };

        //checking tail and i incrementation
        function checkEnd(node) {
            i++;
            if (node.nextNode === null) {
                return;
            } else {
                checkEnd(node.nextNode);
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






}


class node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    };
};

const newNode = "1st node";
const hello = "2nd node"
const yes = "3rd node";
const okay = "4th node";




const newList = new linkedList();
newList.append(newNode);
newList.append(hello)
newList.append(yes)
newList.prepend(okay)
console.log(newList)
console.log(newList.size())
console.log(newList.head())
console.log(newList.tail())
