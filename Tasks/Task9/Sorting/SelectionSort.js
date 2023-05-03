// Selection Sort 

function Swap(arr, xp, yp) {

    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;

}

function SelectionSort(arr, n) {

    var i, j, min_idx;

    for (i = 0; i < n - 1; i++) {

        min_idx = i; // initially set the minimum index as 0

        for (j = i + 1; j < n; j++) {

            if (arr[j] < arr[min_idx]) 
            { 
                min_idx = j; 
            }

            // Swap the found minimum element and the first element
            //console.log(min_idx,i);
            Swap(arr, min_idx, i);

        }
    }
}

let array = [2, 3, 4, 0, -1, -11];
console.log(`BEFORE: ${array}`);
SelectionSort(array, array.length);
console.log(`AFTER: ${array}`);

// Time Complexity is O(n^2)