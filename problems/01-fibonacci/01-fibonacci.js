/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    num1 = 1
    num2 = 0
    for(let i = 0;i<n; i++){
        temp = num2
        num2 = num1 + num2
        num1 = temp
    }
    return num2
}

console.log(fib(7))
//1 1 2 3 5 8 11 19