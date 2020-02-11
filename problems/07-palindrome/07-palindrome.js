/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    if(someStr.length == 1){
        return true
    }else if(someStr.substring(0,1) == someStr.substring(someStr.length-1,someStr.length)){
        return isPalindrome(someStr.substring(1,someStr.length-1))
    }else{
        return false
    }
}

console.log(isPalindrome("racecar"));
