/*Given a set of numbers, return the additive iverse of each. 
Each positive becomes negatives, and the negatives become positives
 */
 function invert(arr) {
    var reverse = [];
     for(x = 0; x <= arr.length - 1; x ++){
        if(arr[x] > 0) {
            reverse[x] = arr[x] - arr[x] * 2;
        } else reverse[x] = Math.abs(arr[x]);
     }
     return reverse;
 }

