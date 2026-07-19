// You are given an integer array arr[]. You need to find the maximum sum of a subarray (containing at least one element) in the array arr[].

// Note : A subarray is a continuous part of an array.

// Examples:

// Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
// Output: 11
// Explanation: The subarray [7, -1, 2, 3] has the largest sum 11.
// Input: arr[] = [-2, -4]
// Output: -2
// Explanation: The subarray [-2] has the largest sum -2.
// Input: arr[] = [5, 4, 1, 7, 8]
// Output: 25
// Explanation: The subarray [5, 4, 1, 7, 8] has the largest sum 25.

//Question link : ()

 function isPalindrome(arr){

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        let result = 0;
           for (let j = arr.length; j >=0; j--) {
                console.log(arr[j]);
                if (arr[j]===arr[i]) {
                    result++
                }
                if (result===arr.length) {
                    return true
                }
           }     return false
    }


 }
console.log(isPalindrome([1, 2, 3, 2, 1]));

