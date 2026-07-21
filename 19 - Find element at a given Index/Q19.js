// Given an array arr[] of integers and an index i(0-based index). Return the element present at the index i in the array.

// Examples:

// Input: i = 2 , arr[] = [10, 20, 30, 40, 50]
// Output: 30
// Explanation: The value of arr[2] is 30 .
// Input: i = 4 , arr[] = [10, 20, 30, 40, 50, 60, 70]
// Output: 50
// Explanation: The value of the arr[4] is 50 .

//Question link : ( https://www.geeksforgeeks.org/problems/c-array-print-an-element-set-25933/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions)

function findElementAtIndex(i, arr) {
        // code here
        for(let j=0; j<=arr.length; j++ ){
        if (j===i) {
          return arr[i];
        }
        }
    }

console.log(findElementAtIndex(2,[10, 20, 30, 40, 50]));
console.log(findElementAtIndex(4,[10, 20, 30, 40, 50, 60, 70]));
