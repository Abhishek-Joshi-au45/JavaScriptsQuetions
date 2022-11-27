function fun(){
      console.log(this.fname,",",this.lname)
}
const obj1 = {
    fname : "abhishek",
   lname : "joshi"
}
const obj2 = {
    fname : "manish",
    lname : "joshi"
}
let a = fun.bind(obj1)
let b = fun.bind(obj2)
a()
b()