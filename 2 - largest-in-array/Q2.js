// Given an array arr[]. The task is to find the largest element and return it.

// Examples:

// Input: arr[] = [1, 8, 7, 56, 90]
// Output: 90
// Explanation: The largest element of the given array is 90.

// Questions link : (https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions)

function largest(arr) {

        let biger = arr[0]
        for(let i=0; i< arr.length ; i++){
            if(arr[i]>biger){
                biger=arr[i]
            }
        }

        console.log(biger);
    }
    
largest([1, 8, 7, 56, 90]);