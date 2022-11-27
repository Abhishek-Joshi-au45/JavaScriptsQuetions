/* Q1. Create a Student class and initialize it with a name and roll number.
create an object of that class in the same file and print name and roll
number
*/

class Student {
    constructor (Name, Rollnumber){
        this.Name = Name,
        this.Rollnumber = Rollnumber
    }
}
stud1 = new Student("Abhishek",1)
console.log(stud1);

// Output 
// Student {Name: 'Abhishek', Rollnumber: 1}
