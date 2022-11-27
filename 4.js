var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
i=Object.keys(student);
console.log(i);

for(ele in student)
{
    console.log(ele);
}