const insertionSort = arr => {

    for (let i = 1; i < arr.length; i++) {

        let key = arr[i];
        //console.log(`key: ${key}`);
        let j;
        for (j = i - 1; (j >= 0 && arr[j] > key); j--) {
            
            //console.log(arr[j],arr[j+1]);
            arr[j + 1] = arr[j];
            //console.log(arr[j+1]);
        }
        arr[j + 1] = key;
        //console.log(arr[j+1]);
    }
    return arr;
}

let array = [12, 7, 22, 9, 13]
console.log(`Final Sorted Array: ${insertionSort(array)}`);

// Time Complexity O(n^2);
