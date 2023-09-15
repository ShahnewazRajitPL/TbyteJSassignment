class TreeNode{
    constructor(data){
        this.data =data;
        this.children=[];

    }

    add(data){
        this.children.push(new TreeNode(data));
    }

    remove(data){
        this.children =this.children.filter(node =>{
            return node.data != data
        }),
    }

    
}

class Tree{
    constructor(){
        this.root=null;

    }

    traverseBF(fn){
        const arr=[this.root];
        while(arr.length){
            const node=arr.shift();

            for(let child of node.children)
            {
                arr.push(child);
            }
            fn(node)
        }
    }
}


const numbers=[];

const tree =new Tree()
tree.root =new TreeNode(1);



    tree.root.add(4);
    tree.root.add(6);
    //tree.root.add(7);
    tree.root.add(8);
    //tree.root.children[2].add(44);
    tree.root.children[2].add(45);
    tree.root.children[3].add(65);

    tree.traverseBF(node => {
        numbers.push(node.data);
    })



    //node.remove(6);
   // node.add(8);


    console.log(numbers);
