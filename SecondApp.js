//stair print (#)
let algorithm="";

//steps 1: Initialze as empty string called result
//steps 2: Enter a for loop with the variable row ,range from o to n
//steps 3: Insider the outer loop , Initialize an empty string called "stair"
//steps 4: Enter a nested for loop with variable column range o to n
//steps 5: check the value of col  is less than or equal to the value of row
//           If it is true add stair (#) other (-)
//steps 6: append the stair string to the result string , Additionally add '<br/>'
//steps 7: return "result " string

//Console.log(#)

function staircase(n){
    let result="";
    for(let row=0;row<n; row++ ){
        let stairs="";
        for(let col=0;col<n;col++){
            if(col<=row){
                stairs+= "n";
            }else{
                stairs+="-";
            }
        }
        result+= stairs+"<br/>";
    }
    return result;
}

algorithm="StairCase";

//Print (#) as Pyramid
console.log(Math.floor ((2*4-1)/2))

function Pyramid(n){
    let result="";
    const midPoint=Math.floor((2*n-1)/2);
    for(let row=0;row<n;row++){
        let level="";
        for(let col=0;col<2*n-1;col++){
            if(midPoint -row <=col && midPoint + row>= col){
                level +="#";
            }else{
                level +="-";
            }
        }
        result+= level+"<br/>";
    }
    return result;
}

algorithm="Pyramid";

//Recursievley
function pyramid_recursive(n, row=0, level=''){
    if(row==n)
    return;
if(level.length==2*n-1){
    console.log(level);
    return pyramid_recursive(n, row+1);
}

const midPoint =Math.floor((2*n-1)/2);
let add;
if(midPoint-row<= level.length && midPoint+row >=level.length){
    add+= "#";
}else{
    add+="-";
}
pyramid_recursive(n,row,level+add);
}

algorithm="Pyramid";




pyramid_recursive(4)


function finVowel(str){
    let count=0;
    
    const vowels= "aeiou";
    for(let char of str.tolowerCase()){
        if(vowels.includes(char)) count++;
    }
    return count;
}

function createSpirtalMatrix(n){
    let result=[];
    for(let i=0;i<n;i++){
        result.push([]);
    }

    let counter =1;
    let startCoulmn =0;
    let endColumn=n-1;
    let startRow=0;
    let endRow=n-1;

    while(startCoulmn <= endColumn && startRow<=endRow){
        for (let i=startCoulmn;i<=endColumn;i++){
            result[startRow][i]=counter;
            counter++;
        }
        startRow++;

        //RightCol

        for(let i= startRow;i<=endRow;i++){
            result[i][endColumn]= counter;
            counter++;
        }
        endColumn--;

        //Bottom Row
        for(let i=endColumn;i>=startCoulmn;i--){
            result[endRow][i]=counter;
            counter++;
        }
        endRow--;

        //start col
        for(let i=endRow; i>=startRow;i--){
            result[i][startCoulmn]=counter;
            counter++;
        }
        startCoulmn++;

    }

    let maxString= result.map(x=>x.join(' ')).join('<br/>');
    return maxString;
}
algorithm="Spiral Matrix";
document.getElementById("algorithm").innerHTML=algorithm;

document.getElementById("result").innerHTML = CreateSpirtalMatrix(5);