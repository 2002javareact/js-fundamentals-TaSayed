/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let person = {
    name: "Greg",
    age: "32"
}

function person2(name, age){
    this.name = name;
    this.age = age
}


class person3{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(person.name);
let maria = new person2("maria" , 54)
console.log(maria.name);
let christina = new person3("christina" , 25)
console.log(christina.name);
