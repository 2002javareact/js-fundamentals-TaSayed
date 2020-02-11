/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    if(sumNum === 1){
        return 1
    }
    return factorial(sumNum-1)*sumNum
}

function factorial2(sumNum) {
    ret = 1
    for(let i = 1; i <= sumNum; i++){
        ret *= i
    }
    return ret
}
console.log(factorial(4));
console.log(factorial2(4));
