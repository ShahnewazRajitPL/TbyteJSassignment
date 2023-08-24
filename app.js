let algorithm="Algorithm";
//algorithm=45;
//algorithm=[4,5,6,1,2,3,8]
//algorithm={"charAt":"1",}

//constant time
/*function printFirstElement(array){
    console.log(array[0]);
}*/

//2 logarithomic time-0(log(n))
//3 Linear Time - 0(n)

/*function printFirstElement(array){
    for(let i=0;index<array.length;i++){
        console.log(array[i]);
    }
}*/

//4 Quasilinear time-o(n*log(n))

//5 Quadratic Time=0(n^2)
/*function printFirstElement(array){
    for(let i=0;index<array.length;i++){
        for(let j=0;index<array.length;j++)
        console.log(array[i],array[j]);
    }
}*/

//6 Exponential Time- 0(2^n)

//[0,1,1,2,3,5,8,13]- fubonacci
//steps-
//1- Initialize an array with two elements[0,1]
//2- Iterate given number(n) from 2 to n
//3- Retrive last two elements from array end assgin two new values
//4- Calculate the sum of (a+b)
//5- Add Push the sum into the result array
//6- Return result array

/*function normalFib(n){
    let result=[0,1];
    for(let i=2;i<=n;i++)
    {
        const a=result[i-1];
        const b=result[i-2];

        result.push(a+b);
    }
    return result[n];
}

const fibRecursive=(n=> n<1 ? 0: n<=2?1: fibRecursive(n-1)+ fibRecursive(n-2));

//memoizition

function fibRecursive(n,memo={}){
    if(n in memo)
        return memo[n];

    
    if(n<=0) return [];
        
    
    if(n===1) return [0];
        
    
    if(n===2) return [1];
        
    
        return (memo[n]=[...fibRecursive(n-1,memo),fibRecursive(n-1,memo).slice(-1)[0]+fibRecursive(n-2,memo).slice(-1)[0]]);

    

}

algorithm="Fibonacci";



//printFirstElement([4,5,6,7,8,9])

document.getElementById("algorithm").innerHTML="Algorithm";
document.getElementById("result").innerHTML=normalFib(10);*/

"Hello World !"
//Convert to object
//{"H":1,"e":1,"l":3,"o":2,"":2,"W":1,"r":1,"d":1}

//steps
//1. Initialize an empty object, to store frequently count of each charachter in string
//2. Initialize two variables one will hold the max count of character and other will hold the Max character
//3. Iterate through input string 
//4. Increase each string charachter value and assign empty charachter objects
//5. Second Iteration, Iterate through charachater objects
//6. Check Charachter value greater than max variable value 
//        If yes then max will be the charachter value and maxCharachter will be the charachter 
//8. Return maxcharachter

function maxCharachter(str){
    let charMap={};
    let max=0;
    let maxCharachter='';

    for(let char of str){
        charMap[char]=charMap[char]+1||1;

    }
    for(let char in charMap){
        if(charMap[char]>max){
            max=charMap[char];
            maxCharachter=char;

        }
    }
    return maxCharachter;
}

algorithm="Max Charachter";



document.getElementById("algorithm").innerHTML="Algorithm";
document.getElementById("maxCharachter").innerHTML=normalFib('Hello world !');