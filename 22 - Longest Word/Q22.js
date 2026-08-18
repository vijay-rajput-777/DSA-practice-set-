// Given an array arr[] containing strings of names. Your task is to return the longest string. If there are multiple names of the longest size, return the first occurring name.

// Examples :

// Input: arr[] = ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"]
// Output: "GeeksforGeeks"
// Explanation: Name "GeeksforGeeks" has maximum length among all names. 
// Input: arr[] = ["Apple", "Mango", "Orange", "Banana"]
// Output: "Orange"
// Explanation: Names "Orange" and "Banana" both have maximum length among all names but Orange comes first so answer will be "Orange". 

//Question link : (https://www.geeksforgeeks.org/problems/display-longest-name0853/1?page=2&category=Arrays&difficulty=Basic&sortBy=submissions)

function longest(arr) {
    let l = arr[0]
    for (let i = 0; i < arr.length; i++) {
       if (arr[i].length > l.length) {
         l=arr[i]
       }
                
    }return l
}



    console.log(longest(["Geek", "Geeks", "Geeksfor", "GeeksforGeek","GeeksforGeeks"]));
    console.log(longest(["GeeksforGeeks","Geek", "Geeks", "Geeksfor", "GeeksforGeek"]));
    console.log(longest(["Apple", "Mango", "Orange", "Banana"]));
    
     