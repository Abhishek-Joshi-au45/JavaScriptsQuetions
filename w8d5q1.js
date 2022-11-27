obj1 = {
    a:2,
    b:4,
    c:6
}
obj2 = obj1
console.log(obj1); // { a: 2, b: 4, c: 6 }
obj2.c=8;
console.log(obj1); // { a: 2, b: 4, c: 8 }
console.log(obj2); // { a: 2, b: 4, c: 8 }
// when we edit any property of obj2, the change is reflected to obj1 also 
// because obj2 consist the value of obj1 and when we edit any property of obj2 ,obj1 is reflected