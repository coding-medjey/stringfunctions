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

function removeElement(nums, val) {
  for (let i = -1; i < nums.length + 1; i++) {
    let index = nums.indexOf(val);
    nums.splice(index, 1);
    if (index === -1) {
      break;
    }
  }
  return nums;
}

function strStr(haystack, needle) {
  if (haystack === needle) {
    return 0;
  }
  let length = needle.length;
  for (let index = 0; index < haystack.length; index++) {
    let str = haystack.slice(index, index + length);
    if (str === needle) {
      return index;
    }
  }
  return -1;
}

function searchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}

function binarySearchInsert(nums, target, i = null, j = null) {
  if (i == null && j == null) {
    i = 0;
    j = nums.length - 1;
  }
  console.log(i, j);
  if (i === j) {
    if (nums[j] < target) {
      return j + 1;
    } else {
      return j;
    }
  } else if (j === i + 1) {
    if (nums[i] > target) {
      return i;
    } else if (nums[i] < target) {
      return i + 1;
    }
  }
  if (nums[i] === target) {
    return i;
  } else if (nums[j] === target) {
    return j;
  } else {
    let mid = Math.round((i + j) / 2);
    if (nums[mid] >= target) {
      return binarySearchInsert(nums, target, i, mid);
    } else if (nums[mid] <= target) {
      return binarySearchInsert(nums, target, mid, j);
    } else {
      return j;
    }
  }
}

function sumOut(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let result = arr[i];
    if (result === target) {
      return [i, i];
    }
    for (let j = i + 1; j < arr.length; j++) {
      result += arr[j];
      if (result === target) {
        return [i, j - i + 1];
      }
    }
  }
}

function lengthOfTheLastWord(str) {
  let result = str.split(" ");
  result = result.filter((item) => item);
  if (result[i] === undefined) {
    return 0;
  }
  return result[result.length - 1].length;
}

console.log(lengthOfTheLastWord("dfbkjchvosdfnhvdosnfdhu"));
