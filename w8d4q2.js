function myFunc(strings, p2, p3, p4){ // Homework must be at least 80% to ensure my future.]
return (`${p2}${strings[1]}${p3}${strings[2]}${p4}${strings[3]} `)
}
a = "Homework"
b = "80%"
c = "future"
res = myFunc`${a} must be at least ${b} to ensure ${c}.`// myFunc()
console.log(res);