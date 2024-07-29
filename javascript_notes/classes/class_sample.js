// 1. A simple bluePrint for the class, object and a class methods/Instance methods

//defining a class
class Pizza{ //upper case is must for a class
   //defining a constructor 
    constructor() {
        this.size = 'medium'
        this.crust = 'thin'

    }

    //defining a method in class
    //for method inside a class no need to write something like function
    bake(){
        console.log(`baking a ${this.size} ${this.crust} pizza`)
    }
}

const myPizza = new Pizza() //creating an object
myPizza.bake() //calling the class method to an object

