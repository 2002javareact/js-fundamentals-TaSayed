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

    //commented code prints double width and does not print first line
      /*width = height/2
    
      //top
      for(let i = 0; i<height/2; i++){
        lineToPrint = ""
        for(let j=0; j< width-1; j++){
          lineToPrint += " "
        }
        for(let j=width; j<(height-width); j++){
          lineToPrint += character
        }
        
        console.log(lineToPrint);
        width--;
      }
      console.log(" ");
      height -= 2
      width = (height)/2
      for(let i = 0; i<height/2; i++){
        lineToPrint = ""
        for(let j=width-1; j<(height-width)/2; j++){
          lineToPrint += " "
        }
        for(let j=0; j< width; j++){
          lineToPrint += character
          lineToPrint += character
          
        }
        console.log(lineToPrint);
        
        width--;
      }
      */

      width = 1
      while(width != height-1){
        lineToPrint = ""
        for(let i = width-1; i<(height-width)/2; i++){
          lineToPrint += " "
        }
        for(let j = 0; j<width; j++){
          lineToPrint += character;
        }
        for(let j = 1; j<width; j++){
          lineToPrint += character;
        }
        console.log(lineToPrint);
        width++
      }
      width--
      while(width != 0){
        lineToPrint = ""
        for(let i = width-1; i<(height-width)/2; i++){
          lineToPrint += " "
        }
        for(let j = 0; j<width; j++){
          lineToPrint += character;
        }
        for(let j = 1; j<width; j++){
          lineToPrint += character;
        }
        console.log(lineToPrint);
        width--
      }


      break;
  }
}


printShape("Square", 3, "-")
console.log("");
printShape("Triangle", 20, "*")
console.log("");
printShape("Diamond", 5, "s")
console.log("");
