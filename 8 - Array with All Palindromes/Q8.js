// Given an array arr[] of positive integers. Return true if all the array elements are palindrome otherwise, return false.

// Examples:

// Input: arr[] = [111, 222, 333, 444, 555]
// Output: true
// Explanation:
// arr[0] = 111, which is a palindrome number.
// arr[1] = 222, which is a palindrome number.
// arr[2] = 333, which is a palindrome number.
// arr[3] = 444, which is a palindrome number.
// arr[4] = 555, which is a palindrome number.
// As all numbers are palindrome so This will return true.
// Input: arr[] = [121, 131, 20]
// Output: false
// Explanation: 20 is not a palindrome hence the output is false.

//Question link : (https://www.geeksforgeeks.org/problems/palindromic-array-1587115620/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions)


function isPalinArray(arr) {

        for(let i = 0; i < arr.length; i++) {
            
            let original = arr[i].toString();
            let reverse = original.split('').reverse().join('');
            
            if(original !== reverse) {
                console.log(false);
                
            }
        }
        
        console.log(true);
        
    }

isPalinArray([111, 222, 333, 444, 555]);