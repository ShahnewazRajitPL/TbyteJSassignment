//steps
let algorithm="Algorithm";
let words ="Hi There";
let newWords=words.replace(/[^\w]/g,"");
console.log(newWords);

//steps
//Helper function(buildChar(string))
//step-1: Initialized an empty object
//step-2: Remove any special characters (Including spaces) by using regular expressions
//step-3: Convert the clean string into lowercase
//step-4: Iterate over each Charahter in the cleaned string.
//step-5: Check each charachter key is exists in the 'charachter'
            //If it does ,increament its frequency count by 1
            //If it doesn,t ser its frequency count to 1 in the 'charMap'
//step-6: return charchterMap object

// Mainfunction Anagram Function
//step-1: call the "Helper function(buildChar(strings))" store in "charMapA"
//step-2: call the "Helper function(buildChar(strings))" store in "charMapB"
//step-3: check if the number of unique keys (charachter) in "charMapA"=== "charMapB"
            //If doesn't return false 
//step-4: Iterate through each charachter in "charMapA"
//step-5: for each charachter ,check if the frequency count fo charachters'charmapA' ==="CharMapB"
        // If doesnt return false
//step-6:After loop complete , return true;

function buildCharMap(str){
    const charMap={};
    for(let char of str.replace(/[^\w]/g,"").tolowerCase()){
        charMap[char] =charMap[char]+ 1 ||1;
    }
    return charMap;
}

function CheckAnagram(stringA,stringB){
    let charMapA=buildCharMap(stringA);
    let charMapB=buildCharMap.apply(stringB);

    if(Object.keys(charMapA).length!== Object.keys(charMapA).length){
        return false;
    }
    return true;

}

//Array chunk

function ArrayChunk(arr,chunk){
    let chunked=[];
    for(let element of arr){
        let lastElement =chunked[chunked.length-1];
        if(!lastElement|| lastElement.length===chunk){
            chunked.push([element]);

        }else{
            lastElement.push(element);
        }
    }
    return chunked;
}

function Capitalization(str){
    let words=[];
    for(let item of str.split(' ')){
        words.push(item[0].toUpperCase()+item.slice(1));
    }
    return words.join(' ');
}

console.log(Capitalization("please read carefully"));

//console.table(ArrayChunk([1,2,3,4,5,6,7,8,9],3));




document.getElementById("algorithm").innerHTML=algorithm;
document.getElementById("result").innerHTML=CheckAnagram('Hi There !!','Hi there !!!');


