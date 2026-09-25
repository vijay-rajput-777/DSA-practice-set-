// You are given an array arr[], the task is to return a list elements of arr in alternate order (starting from index 0).

// Examples:

// Input: arr[] = [1, 2, 3, 4]
// Output: 1 3
// Explanation:
// Take first element: 1
// Skip second element: 2
// Take third element: 3
// Skip fourth element: 4

//Question link : (https://www.geeksforgeeks.org/problems/print-alternate-elements-of-an-array/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions)

 function getAlternates(arr) {
    
        let result =[]
        for(let i=0; i< arr.length; i+=2){
            result.push(arr[i])
        }console.log(result);
        ;
    }
 getAlternates([1, 2, 3, 4])