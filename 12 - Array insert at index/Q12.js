// You are given an array arr(0-based index) and two positive integer index and val. You need to insert an val at given index.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 5], index = 5, val = 90
// Output: 1 2 3 4 5 90
// Explanation: 90 is inserted at index 5(0-based indexing). After inserting,array elements are like [1, 2, 3, 4, 5, 90].
// Input: arr[] = [1, 2, 3, 4, 5], index = 2, val = 90
// Output: [1, 2, 90, 3, 4, 5]
// Explanation: 90 is inserted at index 2(0-based indexing). After inserting, array elements are like [1, 2, 90, 3, 4, 5].

//Question link : ()

function insertAtIndex(arr, index, val) {
    let result =[]
    for (let i = 0; i <=index; i++) {

        if (i!=index) {
            result+=arr[i]
        }
        if(i===index){
           result+=val
        }
        
    }
    console.log(result);
}

insertAtIndex([1, 2, 3, 4, 5], 5 , 90)
insertAtIndex([1, 2, 3, 4, 5], 2 , 90)