/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

stage = {
    sound: 9,
    length: 13,
    width: 20,
    curtain_closed: false, 
    curtain_color: "red",
    lights: {
        brightness: 7,
        color:"white"
    },


}

function objectProperties(someObj) {
    console.log(stage.sound);
    console.log(stage.length);
    console.log(stage.width);
    console.log(stage.curtain_closed);
    console.log(stage.curtain_color);
    console.log(stage.lights.brightness);
    console.log(stage.lights.color);
    
}

objectProperties(stage)