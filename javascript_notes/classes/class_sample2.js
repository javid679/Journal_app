//refer to class_object_notes.txt




// Instance Properties: what they have
//         - name
//         - age
//         - height

// Instance Methods: what they do
//         - talk
//         - run
//         - jump

//this - refers to the object being created in the class
// so it's more kinda 
// this.width = 5 ---> refers to myrectangle1.width = 5, so referring to that specific object

// creating a class
class Rectangle {

    //setup 
    //constructor: it is a method which is ran only once
    //during the life of the objects and only when the object is being created.

    constructor(){
        // console.log('The Rectangle is being created !')
            this.width = 5
            this.height = 3
            this.color = 'Blue'
        
    }
}


let myRectangle1 = new Rectangle();
/* 
most of the instance properties are user defined so we 
give parameters for the constructors.
checkout next code _withParameters.js
 */

