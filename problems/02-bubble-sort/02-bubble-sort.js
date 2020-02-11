/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    
  for(let i = 0; i<numArray.length; i++){
    for(let j = 0; j<numArray.length; j++){  
      if(numArray[j]< numArray[j-1]){
          temp = numArray[j-1]
          numArray[j-1] = numArray[j]
          numArray[j] = temp
      }
    }
  }
  return numArray
}


console.log(bubbleSort([12,4,5321,34,234,2354,1980,75,97843]))