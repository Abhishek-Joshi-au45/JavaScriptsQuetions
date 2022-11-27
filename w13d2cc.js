/*
Q1. Create a Student class and initialize it with name and roll number.
Make methods to :
1. Display - It should display all the information of the
student. 2. setAge - It should assign age to student
3. setMarks - It should assign marks to the student.
*/

class Student {
    constructor (Name, Rollnumber){
        this.Name = Name,
        this.Rollnumber = Rollnumber
    }
    Display(){
        console.log(`The name of the student is ${this.Name} and rollnumber is ${this.Rollnumber}`)
    }
    setAge(age){
        this.age = age 
       console.log(`The age of the student ${this.Name} is ${this.age}`)
    }
    setMarks(marks){
       this.marks = marks
       console.log(`${this.Name} got ${this.marks} marks out of 100`)
    }
}
let student1 = new Student("Abhishek", 01)
let student2 = new Student("Ayush", 02)
student1.Display()
student2.Display()
student1.setAge(24)
student2.setAge(25)
student1.setMarks(98)
student2.setMarks(97)
console.log(student1);
console.log(student2);











/*
Q2. Create a Circle class and initialize it with radius. Make two methods
getArea and getCircumference inside this class.
*/

class Circle{
    constructor(radius){
     this.radius = radius
    }
    getArea(){
          let Area = (22/7) * this.radius * this.radius
          console.log("This is the area of circle of radius" , this.radius, ":", Area);
    }
    getCircumference(){
        let Circumference = 2 * (22/7) * this.radius
        console.log("This is the Cicumference of circle of radius", this.radius, ":", Circumference)
    }
}
let circle1 = new Circle(3)
let circle2 = new Circle(4)
circle1.getArea()
circle2.getArea()
circle1.getCircumference()
circle2.getCircumference()













/*
Q3. Create a Temperature class.
Make two methods :
1. convertFahrenheit - It will take celsius and will print it into
Fahrenheit.
2. convertCelsius - It will take Fahrenheit and will convert it into
Celsius.
*/

class Temperature{
    constructor(){
    }
    convertFahrenheit(Fahrenheit){
          let Far = (Fahrenheit-32) * (5/9)
          console.log(Far);
    }
    convertCelsius(celsius){
        let cel = (1.8 * celsius) + 32
        console.log(cel )
    }
}
let Temperature1 = new Temperature()
Temperature1.convertFahrenheit(77)
Temperature1.convertCelsius(25)

