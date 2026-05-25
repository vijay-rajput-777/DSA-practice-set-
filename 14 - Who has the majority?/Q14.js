// Given an array arr[] and two elements x and y, return the element that occurs more frequently. If both elements have the same frequency, return the smaller one.

// Examples:

// Input: arr[] = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5], x = 4, y = 5
// Output: 4
// Explanation: frequency of 4 is 4.frequency of 5 is 1.Since 4>1 so return 4
// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], x = 1, y = 7
// Output: 1
// Explanation: frequency of 1 is 1.frequency of 7 is 1.Since 1 < 7, return 1.

//Question link : (https://www.geeksforgeeks.org/problems/who-has-the-majority/1?page=1&category=Arrays&difficulty=Basic&sortBy=submissions)


function moreFrequent(arr, x, y) {
        let count =0;
        let count2=0;
        for (let i = 0; i < arr.length; i++) {
            
            if(arr[i]==x){
                count+=1
            }
            if(arr[i]==y){
                count2+=1
            }
        }
       
        if (count>count2) {
            console.log(x);
        }else  if (count==count2) {
            if (x<y) {
                console.log(x);
                
            }else{
                console.log(y);
                
            }
        }else{
            console.log(y);
            
        }

       
    }

    moreFrequent([1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5] , 4 , 5)
    moreFrequent([1, 2, 3, 4, 5, 6, 7, 8] , 1 , 7)
    //extra Question .... ?
    moreFrequent([3, 17, 2 ,39, 36, 21 ,21 ,9 ,24 ,20], 35 , 2)
