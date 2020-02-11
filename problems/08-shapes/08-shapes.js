/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch(shape){
    case ("Triangle"):
      for(let i  = 0; i<height; i++){
        lineToPrint = ""
        for(let j  = 0; j<height; j++){
          if(j<=i){
            lineToPrint += character
          }else{
            lineToPrint += " "
          }
        }
        console.log(lineToPrint);
        
      }
      break;
    case("Square"):
      for(let i  = 0; i<height; i++){
        lineToPrint = ""
        for(let j  = 0; j<height; j++){
          lineToPrint += character
        }
        console.log(lineToPrint);
        
      }
      break;
    case("Diamond"):
    for(let i  = 0; i<height; i++){
      lineToPrint = ""
      for(let j  = 0; j<height; j++){
        if(j=height-i){
          lineToPrint += character
        }else{
          lineToPrint += " "
        }
      }
      console.log(lineToPrint);
      
    }
    break;
  }
}

printShape("Square", 3, "-")
printShape("Triangle", 3, "-")
//printShape("Diamond", 3, "-")
