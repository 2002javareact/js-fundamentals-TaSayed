/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    k = someArr.splice(index, index+1)
    return someArr
}
console.log(spliceElement([1,2,3,4,5,6], 0));