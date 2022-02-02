function merge(arr1, arr2, cmpFunc) {
  const mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (cmpFunc(arr1[i], arr2[j]) < 0) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}

function mergeSort(arr, cmpFunc) {
  if (typeof cmpFunc !== "function") {
    cmpFunc = (a, b) => a - b;
  }

  if (arr.length <= 1) return arr;
  const middleIdx = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middleIdx), cmpFunc);
  const right = mergeSort(arr.slice(middleIdx), cmpFunc);

  return merge(left, right, cmpFunc);
}

mergeSort([0, -10, 7, 4]);
mergeSort([1, 2, 3]);
mergeSort([]);

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
mergeSort(nums);

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
mergeSort(kitties, strComp);

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
mergeSort(moarKittyData, oldestToYoungest);
