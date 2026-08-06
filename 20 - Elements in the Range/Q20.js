// Given an array arr[] containing distinct positive integers, and two integers start and end defining a range. Determine if the array contains all elements within inclusive range [start, end].

// Note: If the array contains all elements in the given range return true otherwise return false.

// Examples :

// Input: start = 2, end = 5, arr[] =  [1, 4, 5, 2, 7, 8, 3]
// Output: true
// Explanation: All integers within the range [2, 5] are 2, 3, 4, and 5, and all of them are present in the array. Therefore, the answer is true for this test case.
// Input: start = 2, end = 6, arr[] = [1, 4, 5, 2, 7, 8, 3]
// Output: false
// Explanation: The array does not contain 6; hence, it does not contain all the elements in the range [2, 6]. Therefore, the output is false.

//question link :(https://www.geeksforgeeks.org/problems/elements-in-the-range2834/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions)


function checkElements(start, end, arr) {

    for (let i = start; i <= end; i++) {
        
       let result = 0;
       for (let j = 0; j < arr.length; j++) {
        
            if (arr[j]!=i) {
                result++
            }
            if (arr[j]===i) {
                result=0
            }
       }
       if (result>=arr.length) {
        return false
       }
       
           
           
    }return true;
        
}

console.log(checkElements(2,5,[1, 4, 5, 2, 7, 8, 3]));
console.log(checkElements(2,6,[1, 4, 5, 2, 7, 8, 3]));
console.log(checkElements(4,6,[4, 5, 2, 7, 8, 3]));
