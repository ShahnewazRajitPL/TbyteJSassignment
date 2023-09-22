function merger(left,right){
    const results=[];
    while(left.length && right.length){
        if(left[0]< right[0]){
            results.push(left.shift());

        }
        else{
            results.push(right.shift());
        }
    }
    return [...results, ...left, ...right];
}

function mergeSort(arr){
    if(arr.length===1) return arr;
    const centerIndex = Math.floor(arr.length/ 2);
    const left =arr.slice(0, centerIndex);
    const right = arr.slice(centerIndex);
    //const mergerleft= mergeSort(left);
    //const mergerRight = mergeSort(right);

    return merger(mergeSort(left), mergeSort(right));
}

const arry=[54, 5, 1,7,9,5,-5];

console.log(mergeSort(arry));