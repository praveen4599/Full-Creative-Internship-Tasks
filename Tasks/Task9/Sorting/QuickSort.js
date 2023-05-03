function quickSort(arr){

    let pivot = arr[arr.length - 1];
    //console.log('pivot ' + pivot);

    let leftArr = [];
    let rightArr = [];

    if(arr.length < 2){
        //console.log(arr);
        return arr;
    }

    for(let i=0; i< arr.length - 1; i++){

        if(arr[i] < pivot){
            leftArr.push(arr[i]);
        }
        else if(arr[i] > pivot){
            rightArr.push(arr[i]);
        }
    }

    //console.log("Phases "+[...quickSort(leftArr),pivot,...quickSort(rightArr)]);
    // inorder to make it as a single array i use spread operator
    return [...quickSort(leftArr),pivot,...quickSort(rightArr)]; // recursively call it getting sorted both the left and right array
}

const array = [1000,-20,-4,-6,2];
console.log(`Sorted Array is ${quickSort(array)}`);