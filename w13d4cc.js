// Q1. Describe in detail all the concepts of OOPS with code examples.

/* Four Principles of
Object-Oriented Programming
There are four main principles of
Object-Oriented programming:
1 : encapsulation
2 : abstraction
3 : inheritance
4 : polymorphism.

1 Encapsulation : 

Even if we have no idea what encapsulation
is, we can guess just by the word that we are
“enclosing” or hiding something, that’s exactly
what is! With encapsulation, object’s methods
and properties are enclosed within the object,
so there are not exposed.
*/

// Example 

class carEx1{
    constructor(model){
        this.model = model
    }
move(){
        console.log(`This vehicle is a ${this.model}`);
    }
}
let car2 = new carEx1("Alto 800")
car2.move()

// Output 
// This vehicle is a Alto 800


/*
2 Abstraction :

If we look at the car, we can only see what is
outside. We see wheels, doors, windows and
so on. But what we don’t see is the complex
engine and all those inner parts. That’s what
abstraction is: hiding complex details and
showing simple ones. It helps the code to be
more understandable.
*/

// Example 

function  Person (name, age){
        this.name = name
        this.age = age
        const address = "Address" 
        const findAddress = function (){
            console.log( address+"is private")
        }
        this.getAddress = function(){
            console.log(name,age)
            findAddress()
        }  
}
const p = new Person("Abhishek", 24)
p.address // address is private 

/*
In this example we have two functions inside
the main function: findAddress and
getAddress. Abstraction is achieved by hiding
the variable ‘address’ and function
‘findAddress’ from the outside and it’s only
accessible from getAddress function.
*/

/*
3 Inheritance :

Inheritance allows for parent class to pass
functionality to a child class, again, creating
clean and reusable code, avoiding repeats. If
we have class Vehicle that has a function
’move’ and class veh1 with the same function,
we can extend that function into the veh1 .
Here is how it looks in code.
*/
// Example 

class Vehicle{
    constructor(tires,size,type){
        this.tires = tires,
        this.size  = size,
        this.type = type
    }
    move(){
        console.log(`This vehicle is a ${this.type}`);
    }
}
let veh2 = new Vehicle(16,"Huge","Truck")
class Car extends Vehicle{
    constructor(model_name,tires,size,type){
        super(tires,size,type)
        this.model_name = model_name
}
}
let car1 = new Car("Maruti",4,"Medium","Car")
console.log(car1.model_name);
console.log(car1.type);

// Output 
// Maruti
// Car


/*
4 Polymorphism :

We think of polymorphism as something
having multiple forms. In this instance,
polymorphism means the same method can
be used on different objects. For example , if
a Car and a Motocycle have the same
function — drive, polymorphism gives us an
ability to call the same method on different
objects.
*/
//Example :

class NewVehicle{
    constructor(tires,size,type){
        this.tires = tires,
        this.size  = size,
        this.type = type
    }
    move(){
        console.log(`This vehicle is a ${this.type}`);
    }
}
let veh14 = new NewVehicle(16,"Huge","Truck")
class Car4 extends NewVehicle{
    constructor(model_name,tires,size,type){
        super(tires,size,type)
        this.model_name = model_name
}
    move(){
        console.log(`${this.type} is being driven`);
}   
}
let car14 = new Car4("Maruti",4,"Medium","Car")
console.log(car14.model_name);
console.log(car14.type);
car14.move()
veh14.move()

// Output 
// Maruti
// Car
// Car is being driven
// This vehicle is a Truck