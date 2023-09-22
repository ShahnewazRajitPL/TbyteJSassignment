class BinaryNode{
    constructor(data){
        this.data =data;
        this.left =null;
        this.right =null;
    }

    addDataValue(data){
        if(data< this.data && this.left){

        }

        else if(data < this.data){
            this.left =new BinaryNode(data);
        }
        else if(data < this.data && this.right)
        {

        }else if(data > this.data){
            this.right =new BinaryNode(data);
        }
    }


    
}


const binaryNode =new BinaryNode(40);
binaryNode.addDataValue(45);
binaryNode.addDataValue(20);
binaryNode.addDataValue(2);
binaryNode.addDataValue(45);
binaryNode.addDataValue(5);
binaryNode.addDataValue(15);
binaryNode.addDataValue(20);
binaryNode.addDataValue(-1);

console.log(binaryNode)