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

    function levelWidth(root){
        const arr =[root, 'r'];
        const counters =[0];

        while (arr.length >1){
            const node =arr.shift();
            if(node==='r'){
                counters.push(0);
                arr.push('r');
            }
            else{
                arr.push(...node.childern);
                counters[counters.length-1]++;
            }
        }
        return counters;
    }

    console.log('BFS', numbers1);
    console.log('DFS', numbers2);
    console.log('width', levelWidth(tree.root));



    //node.remove(6);
   // node.add(8);


    console.log(numbers);
