// Bubble Sort
console.log("Bubble Sort");

function BubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < (arr.length - i - 1); j++) {

            if (arr[j] > arr[j + 1]) {

                Swap();

            }
        }
    }

    function Swap() {

        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
    
    }

}


let array = [1, 4, 2, 5, -2, 3];
console.log(`Before Sort ${array}`);
BubbleSort(array);
console.log(`After Sort ${array}`);

// The above code has O(n^2) time complexity

// Optimized Bubble Sort by using boolean 

console.log("Optimized Bubble Sort");

function OptimizeBubbleSort(arr) {
    
    var isSwaped = false;

    for (var i = 0; i < arr.length; i++) {
        isSwaped = false;

        for (var j = 0; j < (arr.length - i - 1); j++) {

            if (arr[j] > arr[j + 1]) {

                Swap();
                isSwaped = true;
            }
        }

        // if 2 elements are not swapped then it will break the inner loop
        if(!isSwaped){
            break;
        }
    }

    function Swap() {

        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
    
    }
    
}


let array2 = [1, 4, 2, 5, -2, 3];
console.log(`Before Sort ${array2}`);
BubbleSort(array2);
console.log(`After Sort ${array2}`);
