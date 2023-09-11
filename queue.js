class Queue{
    constructor(){
        this.data=[];
    }

    add(record){
        this.data.unshift(record);
    }

    remove(){
        this.data.pop();
    }

    addLastElement(data){
        if(this.data.includes(data)) return;
        this.data.push(data);
    }


}

let queue =new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.remove();
queue.addLastElement(4);

console.log(queue.data)

document.getElementById("algorithm").innerHTML="algorithm";

document.getElementById("result").innerHTML=queue