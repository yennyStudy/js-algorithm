function insertionSort(arr, cmpFunc) {
  if (typeof cmpFunc !== "function") {
    cmpFunc = (a, b) => a - b;
  }
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    let swapIdx = i;
    for (let j = i - 1; j >= 0; j--) {
      if (cmpFunc(cur, arr[j]) < 0) {
        arr[j + 1] = arr[j];
        swapIdx = j;
      } else break;
    }
    arr[swapIdx] = cur;
  }
  return arr;
}
insertionSort([5, 3, 8, 1, 2, 7]);
insertionSort([4, 20, 12, 10, 7, 9]);
insertionSort([0, -10, 7, 4]);
insertionSort([1, 2, 3]);
insertionSort([]);

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
insertionSort(kitties, strComp);
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
insertionSort(moarKittyData, oldestToYoungest);
