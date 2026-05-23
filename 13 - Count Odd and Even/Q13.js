// Given an array arr[] of positive integers. The task is to return the count of the number of odd and even elements in the array.

// Note: Return two elements where the first one in the count of odd & second one is the count of even.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 5]
// Output: 3 2
// Explanation: There are 3 odd elements (1, 3, 5) and 2 even elements (2 and 4).
// Input: arr[] = [1, 1]
// Output: 2 0
// Explanation: There are 2 odd elements (1, 1) and no even elements.

//Question link : (https://www.geeksforgeeks.org/problems/count-odd-even/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions)


function countOddEven(arr) {

    let a = 0;
    let b = 0;
        for (let i = 0; i < arr.length; i++) {

            if (arr[i]%2===0) {
                a+=1
            }else{
                b+=1
            }          
        }
        console.log(b , a);
        
}
countOddEven([1, 2, 3, 4, 5])
countOddEven([1, 1])