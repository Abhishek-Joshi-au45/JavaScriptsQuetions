const array = ["Johnny","Billy","Sandy"]
let newObject = {}
for (let i=0; i < array.length; i++) {
  if (array[i] !== undefined) {
    newObject[i] = array[i]
  }
}
console.log(newObject);
console.log(newObject["0"]);
let k=newObject["1"]
console.log(k);

