// Given an array arr[], swap the kth element from the beginning with the kth element from the end.

// Note: 1-based indexing is followed.

// Examples :

// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], k = 3
// Output: [1, 2, 6, 4, 5, 3, 7, 8]
// Explanation: 3rd element from beginning is 3 and 3rd element from end is 6, so we replace 3 & 6.

//Question link : (https://www.geeksforgeeks.org/problems/swap-kth-elements5500/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions)

function swapKth(arr, k) {
        
    let start = k - 1;
    let end = arr.length - k;

    let m = arr[start];
    let endValue = arr[end];

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (i === start) {
            arr[i] = endValue;
        }

        if (i === end) {
            arr[i] = m;
        }

        newArr.push(arr[i]);
    }

    return newArr;

        
    }
console.log(swapKth([1, 2, 3, 4, 5, 6, 7, 8] , 3));
console.log(swapKth([5, 3, 6, 1, 2] , 2));
console.log(swapKth([45, 15, 81, 19, 51, 64, 36, 99, 72] , 9)); // 72, 15, 81, 19, 51, 64, 36, 99, 45
