/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    if(typeof(someNum) == Number || someNum){
        while(someNum!= 1 || someNum != 0 || someNum<=1 ){
            someNum = someNum/2
        }
    }
  if(someNum== 1 || someNum== 0 || someNum<=1 ){
      console.log(someNum)
  }
}
//come back to this
isEven(4)