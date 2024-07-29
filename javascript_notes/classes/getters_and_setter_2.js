/* i am following both videos at this point
so , this is from another video where he explained about
getters and setters a bit better 
*/

class Pizza{ //upper case is must for a class
    //defining a constructor 
     constructor(_size, _crust, _type) {
         this.size = _size
         this.type = _type
         this.crust = _crust
         this.toppings = []
 
     }
//Method1:
     /*
     get crust (){
        return this.crust
     }
    */

    /* 
    set crust (pizzaCrust){
        this.crust = pizzaCrust;
     }
    */
   // however the above method is kinda have to access like properties which is not recommended anyways
   // so we define something like below
//Method 2
   getCrust(){
    return this.crust;
   }

   setCrust(pizzaCrust){
    this.crust = pizzaCrust;
   }

   //another example 
   getToppings(){
    return this.toppings;
   }

   setToppings(topping){
    this.toppings.push(topping)
   }

 
     //defining a method in class
     //for method inside a class no need to write something like function
     bake(){
         console.log(`baking a ${this.size} ${this.crust} pizza`)
     }
 }
 
 const myPizza = new Pizza('small', 'thin', 'pepperoni') //creating an object
 myPizza.bake();

 // myPizza.type = 'barbeque' 
 // console.log(myPizza.type) 
 /*
 the above way can change the property 
 but it is not recommended, we have to do getters and setters for that

 */

 // for Method1 
 // console.log(myPizza.crust)
 // myPizza.crust = 'crispy'

 //for Method 2
 
 console.log(myPizza.getCrust())
 myPizza.setCrust('crispy')
 console.log(myPizza.getCrust);

 console.log(`Before the setter, the toppings are :${myPizza.getToppings()}`)
 myPizza.setToppings('chicken')
 console.log(`Now, the toppings are changed to ${myPizza.getToppings()}`);







 