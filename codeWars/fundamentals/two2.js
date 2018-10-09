/*There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([1, 1, 1, 2, 1, 1]) === 2;
findUniq([0, 0, 0.55, 0, 0]) === 0.55;
It's guaranteed that array contains more than 3 numbers. 
The tests contain some very huge ANGLE_instanced_arrays, so think about performance.*/

function findUniq(arr) {
    let numCount = {};
    for(let i = 0; i < arr.length; i++) {
        if(numCount[arr[i]]){
            numCount[arr[i]]++;
        } else {
            numCount[arr[i]] = 1;
        }
    }
    for(let num in numCount) {
        if(numCount[num] === 1){
            return parseFloat(num);
        }
    }
}