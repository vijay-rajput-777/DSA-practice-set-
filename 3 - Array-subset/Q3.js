// Given two arrays a[] and b[], your task is to determine whether b[] is a subset of a[].

// Examples:

// Input: a[] = [11, 7, 1, 13, 21, 3, 7, 3], b[] = [11, 3, 7, 1, 7]
// Output: true
// Explanation: b[] is a subset of a[]

//Question link : (https://www.geeksforgeeks.org/problems/array-subset-of-another-array2317/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions)


function isSubset(a, b) {

       a.sort((x,y)=> x-y);
       b.sort((x,y)=> x-y);

       let i=0, j=0;

       let m=a.length ,n=b.length;
       
       while (i<m && j<n) {
        if (a[i]<b[j]) {
            i++;
        }else if (a[i]===b[j]) {
            i++;
            j++;
        }else{
           return false;
        }
       }return j===n;
       
       
    }
    console.log(isSubset([11, 7, 1, 13, 21, 3, 7, 3],[11, 3, 7, 1, 7]));
    console.log( isSubset([10, 5, 2, 23, 19],[19, 5, 3]));
    
    
// isSubset([11, 7, 1, 13, 21, 3, 7, 3],[11, 3, 7, 1, 7])
// //more examples.....
// isSubset([1, 2, 3, 4, 4, 5, 6],[1, 2, 4])
// isSubset([10, 5, 2, 23, 19],[19, 5, 3])
