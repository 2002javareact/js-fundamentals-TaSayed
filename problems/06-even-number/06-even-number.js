/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

function isEven(someNum) {
    if(Number.isInteger(someNum/2)){
        return true
    }
    return false
    
}
console.log(isEven(25));

