// Parent class
class Pizza {
    constructor (pizzaSize){
        this.size = pizzaSize;
        this.crust = 'original'
    }

    getCrust(){
        return this.crust
    }
    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
}

//child class
class Specialty extends Pizza {
    constructor(pizzaSize){
        //super calls the constructor of the parent class
        super(pizzaSize);
        /* equivalent to 
        constructor of the parent class + another line below
        */
        this.type = 'The works';

    }
    slice(){
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`)
    }
}

const mySpeciality = new Specialty('medium');
mySpeciality.slice(); // Our The works medium pizza has 8 slices


