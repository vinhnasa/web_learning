function checkArray(arr1, arr2){
    let minArr1 = arr1[0];
    let minArr2 = arr2[0];
    for(let i = 1; i < arr1.length; i++){
        if(arr1[i] < minArr1){
            minArr1 = arr1[i];
        }
    }
    for(let i = 1; i < arr2.length; i++){
        if(arr2[i] < minArr2){
            minArr2 = arr2[i];
        }
    }

    let maxArr1 = arr1[0];
    let maxArr2 = arr2[0];
    for(let i = 1; i < arr1.length; i++){
        if(arr1[i] > maxArr1){
            maxArr1 = arr1[i];
        }
    }
    for(let i = 1; i < arr2.length; i++){
        if(arr2[i] > maxArr2){
            maxArr2 = arr2[i];
        }
    }

    if(minArr1 > minArr2 && maxArr1 < maxArr2)
        return true;
    else
        return false;
}

console.log(checkArray([1,2,3], [0,2,3,4]))