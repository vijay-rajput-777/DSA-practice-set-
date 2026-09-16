// Given an array arr[]. Your task is to find the minimum and maximum elements in the array.

// Examples:

// Input: arr[] = [1, 4, 3, 5, 8, 6]
// Output: [1, 8]
// Explanation: minimum and maximum elements of array are 1 and 8.
// Input: arr[] = [12, 3, 15, 7, 9]
// Output: [3, 15]
// Explanation: minimum and maximum element of array are 3 and 15.

//Question link : (https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions)

function getMinMax(arr) {
       
    let a =arr[0]
        for (let i = 0; i < arr.length; i++) {
           if (a>arr[i]) {
                a=arr[i];
           }
        }
    let b=arr[0]
        for (let j = 0; j < arr.length; j++) {
            if (b<arr[j]) {
                b=arr[j];
           }
        }
        console.log(a,b);
        
    }

getMinMax([1, 4, 3, 5, 8, 6])
getMinMax([12, 3, 15, 7, 9])