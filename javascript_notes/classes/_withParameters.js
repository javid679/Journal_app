/*
since most of the classes and their properties are
user defined, we use parameters in constructors.

they can be done by:

constructor(_parameter1, _parameter2, _parameter3,..)

also, 
this.parameter1 = parameter1 
(equivalent to obj1.property = parameter)
so not to confuse this.parameter1 = parameter1 notation
since it is written for our  convinience

*/

class Rectangle {
    constructor ( _width ,_height, _color){
        this.width = _width 
        this.height = _height
        this.color = _color
    }

    /*
    Now, let's write the Instance method 
    */

    getArea(){
        return this.width * this.height
    }

    printRectangle(){
        console.log(`We have created a rectangle with ${this.width} and ${this.height} of ${this.color}`)
    }
}

let rectangle1 = new Rectangle(10, 3, 'red');
let rectangle2 = new Rectangle(20, 6, 'yellow');

console.log(rectangle1.getArea()) 
console.log(rectangle2.getArea())
rectangle1.printRectangle();

