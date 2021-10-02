function getMinIndex(arr, j) {
  let minNumber = +Infinity;
  let minIndex;
  for (let i = j; i < arr.length; i++) {
    if (minNumber > arr[i]) {
      minNumber = arr[i];
      minIndex = i;
    }
  }
  return minIndex;
}

function sortinAlgorithm(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    a = getMinIndex(arr, i);
    arr[i] = arr[a];
    arr[a] = currentElement;
  }
  return arr;
}

function merge(arr1, arr2) {
  let result = [];
  let length = arr1.length + arr2.length;
  let j = 0;
  for (let i = 0; i < length; i++) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result;
}

function mergeSort(arr, startIndex, endIndex) {}

function twoSum(nums, target) {
  let i = 0;
  let object = {};
  let result = [];
  while (i < nums.length) {
    min = target - nums[i];
    if (object[min] !== undefined) {
      return [object[min], i];
    }
    object[nums[i]] = i;
    i++;
  }

  return result;
}

function reverse(x) {
  let arr = [];
  let multiplication = 0;
  while (x !== 0) {
    let result = x % 10;
    if (x < 0) {
      x = Math.ceil(x / 10);
    } else {
      x = Math.floor(x / 10);
    }
    arr.push(result);
  }
  let length = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    multiplication += arr[i] * Math.pow(10, length);
    length--;
  }
  return multiplication;
}

function removeDuplicates(arr) {
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
      i--;
    } else {
      j++;
    }
  }
  return arr;
}

console.log(removeDuplicates([0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4]));
