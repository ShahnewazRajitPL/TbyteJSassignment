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

    removeFirst(){
        if(!this.head) return;
        this.head=this.head.next;
    }

    removeLast(){
        if(!this.head) return;
        if(!this.head.next){
            this.head=null;
            return;
        }

        let previous=this.head;
        let nextNode=this.head.next;
        while(nextNode.next){
            previous=nextNode;
            nextNode=nextNode.next;
        }
       previous.next =null; 
    }

    insertLast(data){
        const lastNode=this.getLast();
        if(lastNode){
            lastNode.next=new Node(data);
        }
        else{
            this.head=new Node(data);
        }
    }

    getAt(index ){
        let counter =0;
        let node=this.head;
        while(node){
            if(counter ===index) return node;
            counter++;
            node=node.next;

        }
        return null;
    }

    removeAt(index){
        if(!this.head) return;
        if(index===0){
            this.head=this.head.next;
            return;
        }
        let previous=this.getAt(index -1);
        if(!previous|| !previous.next) return;
        previous.next =previous.next.next;
    }

    insertAt(data,index){
        if(!this.head){
            this.head=new Node(data);
            return;

        }

        if(index===0){
            this.head =new Node(data,this.head);
            return;
        }
        let previous =this.getAt(index-1)|| this.getLast();
        const node=new Node(data, previous.next);
        previous.next=node;

    }
}

let linkedList=new linkedList();
linkedList.insertFirst("Blue1");
linkedList.insertFirst("Green2");
linkedList.insertFirst("Red3");
//linkedList.removedFirst();
linkedList.removeLast();
linkedList.insertLast("Pink5");
linkedList.getAt(3);
linkedList.removeAt(3);
linkedList.insertAt('Black',3);
//console.log(linkedList.nodeSize());
//console.log(linkedList.getFirst());
//console.log(linkedList.getLast());

//linkedList.clear();

console.log(linkedList);