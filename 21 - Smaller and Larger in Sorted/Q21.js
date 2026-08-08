// Given a sorted array arr[] and a value target, return an array of size 2. The first value is the number of elements less than or equal to the target, and the second value is the number of elements greater than or equal to the target.

// Examples:

// Input: arr[] = [1, 2, 8, 10, 11, 12, 19], target = 0
// Output: [0, 7]
// Explanation: There are no elements less or equal to 0 and 7 elements greater to 0.
// Input: arr[] = [1, 5, 8, 12, 12, 12, 19], target = 12
// Output: [6, 4]
// Explanation: There are 6 elements less or equal to 12 and 4 elements greater or equal to 12.

//Question link : (https://www.geeksforgeeks.org/problems/smaller-and-larger4005/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions)

function getMoreAndLess(arr, target) {
        let less = 0;
        let greater=0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]<=target) {
                less++
            }        
            if (arr[i]>=target) {
                greater++
            }    
        }
        return [less , greater]
    }

console.log(getMoreAndLess([1, 2, 8, 10, 11, 12, 19],0));
console.log(getMoreAndLess([1, 5, 8, 12, 12, 12, 19],12));
