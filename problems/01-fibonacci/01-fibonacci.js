/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    num1 = 1
    num2 = 0
    for(let i = 0;i<n+1; i++){
        temp = num2
        num2 = num1 + num2
        num1 = temp
    }
    return num2
}

function recursiveFib(n){
    if(n === 0 || n===1){
        return 1;
    }else{
        return recursiveFib(n-1) + recursiveFib(n-2)
    }
}

console.log(fib(7))
console.log(recursiveFib(7))
//1 1 2 3 5 8 13 21