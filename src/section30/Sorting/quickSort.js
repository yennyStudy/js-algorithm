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

const quickSort = (arr, comparator, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const sortedIndex = pivot(arr, comparator, left, right);
    quickSort(arr, comparator, left, sortedIndex);
    quickSort(arr, comparator, sortedIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([4, 20, 12, 10, 7, 9]));
console.log(quickSort([0, -10, 7, 4]));
console.log(quickSort([1, 2, 3]));
console.log(quickSort([]));

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
quickSort(kitties, strComp);
const moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];
function oldestToYoungest(a, b) {
  return b.age - a.age;
}
quickSort(moarKittyData, oldestToYoungest);
