/* Q2. Write the above code to enter details of 10 students, and take input
from the user.
*/

class Student {
    constructor (Name, Rollnumber){
        this.Name = Name,
        this.Rollnumber = Rollnumber
    }
}
let stud = new Array(10)
for(let i =0; i<10; i++){
    n = require("prompt-sync")()("Enter the Name")
    r = Number(require("prompt-sync")()("Enter the Rollnumber"))
    stud[i] = new Student(n,r)
}
console.log(stud);