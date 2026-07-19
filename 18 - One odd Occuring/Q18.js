// Given an array of arr[] positive integers where all numbers occur even number of times except one number which occurs odd number of times. Return that number.

// // Examples:

// // Input:arr[] = [1, 2, 3, 2, 3, 1, 3]
// // Output: 3
// // Explaination: 3 occurs three times.
// // Input:arr[] = [5, 7, 2, 7, 5, 2, 5]
// // Output: 5
// // Explaination: 5 occurs three times.

// // Question link : (https://www.geeksforgeeks.org/problems/find-the-odd-occurence4820/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions)

function getOddOccurrence(arr) {
        let ans = 0;

        for (let num of arr) {
            ans ^= num;
        }

        return ans;
    }

console.log(getOddOccurrence([1, 2, 3, 2, 3, 1, 3]));
console.log( getOddOccurrence([5, 7, 2, 7, 5, 2, 5]));


