/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

function spliceElement(someArr, index) {
    k = someArr.splice(index, index+1)
    return someArr
}


function spliceElement2(someArr, index) {
    ret = []
    for(let i = someArr.length-1; i>= 0; i-- ){
        if(i!=index){
        ret.push(someArr.pop())
        }else{
            someArr.pop()
        }
    }
    return ret
}

console.log(spliceElement2([1,2,3,4,5,6], 3));