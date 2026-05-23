// Given an unsorted array arr[]. Find the count of elements less than or equal to the given element x.

// Examples:

// Input: x = 9, arr[] = [10, 1, 2, 8, 4, 5] 
// Output: 5
// Explanation: The 5 elements are 1, 2, 8, 4 and 5.
// Input: x = 2, arr[] = [1, 2, 2, 5, 7, 2, 9] 
// Output: 4 
// Explanation: The 4 elements are 1, 2, 2 and 2.

//Question link : (https://www.geeksforgeeks.org/problems/count-of-smaller-elements5947/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions)

function countOfElements(x, arr) {
    let arrry=arr.sort((a, b) => a - b);
        let count =0;
        for (let i = 0; i < arrry.length; i++) {
            if(arr[i]<=x){
                count++;
            }
        }
        console.log(count);
        
        
    }

    // countOfElements(9, [10, 1, 2, 8, 4, 5]);
    countOfElements(2, [1, 2, 2, 5, 7, 2, 9]);