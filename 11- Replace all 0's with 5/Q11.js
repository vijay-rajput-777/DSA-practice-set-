// You are given an integer n. You need to convert all zeroes of n to 5.

// Examples:

// Input: n = 1004
// Output: 1554
// Explanation: There are two zeroes in 1004 on replacing all zeroes with 5, the new number will be 1554.
// Input: n = 121
// Output: 121
// Explanation: Since there are no zeroes in 121, the number remains as 121.

//Question link :(https://www.geeksforgeeks.org/problems/replace-all-0s-with-5/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions)

function convertFive(num) {
      let nuum= num.toString();
      let result='';
    for (let i = 0; i < nuum.length; i++) {
            // console.log(nuum[i]);
            if (nuum[i]!=0) {
                result+=nuum[i]
            }else{
                result+=5;
            }
        }
        console.log(result);

}

convertFive(1004)

 