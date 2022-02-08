function nestedEvenSum(object) {
  let sum = 0;
  let filteredObject = {};
  Object.values(object).forEach((value) => {
    const isObject = typeof value === "object";
    const isNumber = typeof value === "number";
    if (isNumber && value % 2 === 0) {
      sum += value;
    } else if (isObject) {
      filteredObject = Object.assign({}, filteredObject, value);
    }
  });
  if (Object.keys(filteredObject).length === 0) {
    return sum;
  }
  return nestedEvenSum(filteredObject) + sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
