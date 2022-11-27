function createBase(x) {
    return function(y) {
      return x + y;
    };
  }
  var addSix = createBase(6);
  console.log(addSix(10));
  console.log(addSix(21)); 