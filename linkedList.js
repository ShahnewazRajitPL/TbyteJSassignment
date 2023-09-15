class Node{
    constructor(data, next =null){
        this.data=data;
        this.next=next;
    }


}

class linkedList{
    constructor(){
        this.head=null;
    }

    insertFirst(data){
        const node=new Node(data, this.head);
        this.head=node;
    }

    nodeSize(){
        let counter=0;

        while (this.head.next){
            counter++,
            node=node.next;
        }
        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head) return null;
        let node =this.head;
        while(node){
            if(!node.next) return node;
            node =node.next;
        }
    }

    clear(){
        this.head =null;
    }

    
}

*[Symbol.iterator](){
    let node=this.head;
    while(node){
        yield node;
        node=node.next;
    }
}

function midPoint(list){
    let slow =list.getFirst();
    let fast =list.getFirst();

    while(fast.next && fast.next.next){
        slow =slow.next;
        fast =fast.next.next;
        
    }
    return slow;
}

function circular(list){
    let slow= list.getFirst();
    let fast=list.getFirst();

    while (fast.next && fast.next.next){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast) return true;

    }
    return false;
}

let linkedList=new linkedList();
linkedList.insertFirst(1);
linkedList.insertFirst(2);
linkedList.insertFirst(3);
//console.log(linkedList.nodeSize());
//console.log(linkedList.getFirst());
//console.log(linkedList.getLast());

//linkedList.clear();

console.log(midPoint(linkedList));

for(let node of linkedList){
    console.log(node.data+=10);
}