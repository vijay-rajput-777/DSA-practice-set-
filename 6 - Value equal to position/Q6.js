// Input: arr[] = [15, 2, 45, 4, 7]
// Output: [2, 4]
// Explanation: Here, arr[2] = 2 exists here and arr[4] = 4 exists.

//Question link : (https://www.geeksforgeeks.org/problems/value-equal-to-index-value1330/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions)

function Index(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i + 1) {
            result.push(arr[i]);
        }
    }
    return result;
}

let arr = [15, 2, 45, 4, 7];

console.log(Index(arr));