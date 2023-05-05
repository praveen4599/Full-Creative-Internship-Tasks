function mergeSort(arr) {

    if (arr.length < 2) {
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(_left, _right) {

    const sortedArr = []

    // check whether the both arrays are not empty
    while (_left.length && _right.length) {
        if (_left[0] <= _right[0]) {

            sortedArr.push(_left.shift())
            // removes the first element from an array and returns that removed element
        }
        else {
            sortedArr.push(_right.shift())
        }
    }

    // console.log(sortedArr)
    // console.log(_left,_right)

    // inorder to merge the arrays i use spread operator
    return [...sortedArr, ..._left, ..._right]
}

const array = [8, 20, -2, 4, -6, 0];
console.log(`Sorted array: ${mergeSort(array)}`);

let array1 = [1,2,3,4,5,6];

array1.forEach(a => console.log(a));
//console.log(a);
array1.filter(a => a/2);
console.log(array1);