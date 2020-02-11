/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr){
    if(someStr === ""){
        return someStr
    }
    return reverseStr(someStr.substring(1, someStr.length)) + someStr[0]
}

console.log(reverseStr("hello"))

//non recursive
function reverseStr2(someStr){
    reversed = ""
    for(let i = 1; i<someStr.length+1; i++){
        reversed += someStr.charAt(someStr.length-i)
    }
    return reversed
}

console.log(reverseStr2("hello"))