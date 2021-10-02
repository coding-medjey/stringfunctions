function rotate(arr, length) {
  let i = 0;
  while (i < length) {
    b = arr.shift();
    arr.push(b);
    i++;
  }
  return arr;
}

function shift(arr) {
  let a = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.length = arr.length - 1;
  return a;
}

function Rotation(arr, n) {
  let length = n % arr.length;
  for (let i = 0; i < length; i++) {
    arr.push(shift(arr));
  }
  return arr;
}

function pop(arr) {
  let length = arr.length - 1;
  let a = arr[length];
  arr.length = arr.length - 1;
  return a;
}

function recursion(arr) {
  if (arr.length === 0) {
    return;
  }
  let result = arr.shift();
  recursion(arr);
  arr.push(result);
  return arr;
}

console.log(recursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
