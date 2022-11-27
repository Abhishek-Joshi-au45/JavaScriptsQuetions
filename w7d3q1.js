const arr = ["Orange","Orange","banana","apple","apple","banana","apple","apple","apple","apple","Orange","Orange","Orange","Orange","banana"]
const count = {};
for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}
console.log(count);
