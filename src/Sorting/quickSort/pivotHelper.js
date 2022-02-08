const pivot = (arr, comparator, start = 0, end = arr.length - 1) => {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }
  const pivotValue = arr[start];
  let index = start;
  for (let i = start + 1; i <= end; i++) {
    if (comparator(arr[i], pivotValue) < 0) {
      index++;
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }
  [arr[start], arr[index]] = [arr[index], arr[start]];
  return index;
};

var arr = [4, 2, 5, 3, 6];
pivot(arr);
console.log(arr); // [3, 2, 4, 5, 6]

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strLength(a, b) {
  return a.length - b.length;
}

pivot(arr1);
pivot(arr2);
pivot(arr3, strLength);
console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log(arr1.slice(0, 3).sort((a, b) => a - b));
console.log(arr1.slice(3).sort((a, b) => a - b));

console.log(arr2.slice(0, 4).sort((a, b) => a - b));
console.log(arr2.slice(4).sort((a, b) => a - b));

console.log(arr3.slice(0, 1).sort(strLength));
console.log(arr3.slice(1).sort(strLength));
