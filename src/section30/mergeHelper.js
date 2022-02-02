const merge = (arr1, arr2, cmpFunc) => {
  if (typeof cmpFunc !== "function") {
    cmpFunc = (a, b) => a - b;
  }
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
};

var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8];

merge(arr1, arr2);

var arr3 = [-2, -1, 0, 4, 5, 6];
var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

merge(arr3, arr4);

var arr5 = [3, 4, 5];
var arr6 = [1, 2];

merge(arr5, arr6);

var names = ["Bob", "Ethel", "Christine"];
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];

function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}

merge(names, otherNames, stringLengthComparator);
