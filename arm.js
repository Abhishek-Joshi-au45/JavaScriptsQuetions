var a = Number(require("prompt-sync")()("Enetr a value"));
let sum= 0;
let temp = a;
while (temp > 0) {
     let remainder = temp % 10;
    sum += remainder * remainder * remainder ;
    temp = parseInt(temp / 10); 
}
if (sum == a) {
    console . log(a,"is an Armstrong number");
}
else {
    console . log(a,"is not an Armstrong number ");
}