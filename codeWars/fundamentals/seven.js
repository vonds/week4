
/* I've written five function, each function receives a parameter:
arr(an array), you should coding something with arr.

    1. getLength(arr)    should return length of arr
    2. getFirst(arr)     should return the first element of arr
    3. getLast(arr)      should return the last element of arr
    4. pushElement(arr)  should push an element to arr, and then return arr
    5. popElement(arr)   should pop an element from arr, and then return arr

  Test.assertSimilar(getLength([1,2,3]),3);
    Test.assertSimilar(getFirst([1,2,3]),1);
    Test.assertSimilar(getLast([1,2,3]),3);
    Test.assertSimilar(pushElement([1,2,3]).length,4);
    Test.assertSimilar(popElement([1,2,3]).length,2);

*/

function getLength(arr) {
  //return length of arr
  return arr.length;
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
function getLast(arr) {
  //return the last element of arr
  return arr[2]
}
function pushElement(arr) {
  var el = 1;
  //push el to arr
  arr.push(el);

  return arr
}

function popElement(arr) {
  //pop an element from arr
  arr.pop();
  return arr;
}
