class linkedList {
    constructor(list = {}) {
        this.list = list;
    };

    append(value) {
        if(Object.keys(this.list).length === 0) {
            this.list["head"] = value;
            return;
        } else {
            check(this.list["head"]);
        }

        function check(data) {
            if (data.nextNode === null) {
                data.nextNode = value;
            } else {
                check(data.nextNode);
            };
        }


    };

}


class node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    };
};

const newNode = new node();
newNode.value = 10;
console.log(newNode);
const hello = new node(115)




const newList = new linkedList();
newList.append(newNode);
newList.append(hello)
console.log(newList)
