/*
first of all, let's know how we access properties of an object

let square1 = Square(3)

then if we 
console.log(square1.width) // 3

we can directly access something like 

square1.width 

and modify by doing something like

square1.width = 25

however, this is not recommended, for that sake we use getters and setters
(at this point idk why and i am so lazy to read bullshit of chatgpt)

Getters : Methods of a class which can be accessed as a property of an object
it is used to get the specific thing, which is actually a method
but can be accessed as a property



Setters: Methods of a class which is used to change existing
property/ies of an object and are accessed like an property

*/


class Square {
    constructor (width){
        this.width = width 
        this.height = width
    }
    
    get area(){
        return this.width * this.height;
    }

    set area(area){
        this.width = Math.sqrt(area);
    }
}

let square1 = new Square(25)
//accessing the area 

console.log(square1.area) //just like a property but infact area is a get method
//setting up
/*
here we want to change the width of the square by providing the area,
so we will give the area and the set method will change the width
*/
console.log(`here before setter, the width is ${square1.width}`)
square1.area = 16 //we are changing the width of the square just like changing the property
console.log(`after setter, the width of the square changed to ${square1.width}`)