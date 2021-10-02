var a = [2, 1, 4, 3, 5, 8, 0];
function merge(arr1, arr2) {
  // arr1 [1, 2] arr2 [4]
  let i = 0,
    j = 0,
    b = [];
  for (let index = 0; index < arr1.length + arr2.length; index++) {
    // i = 3, j= 0
    if (i >= arr1.length) {
      b.push(arr2[j]);
      j++;
      continue;
    }
    if (j >= arr2.length) {
      b.push(arr1[i]);
      i++;
      continue;
    }
    if (arr1[i] < arr2[j]) {
      b.push(arr1[i]);
      i++;
    } else {
      b.push(arr2[j]);
      j++;
    }
  }

  return b;
}
function mergeSort(a) {
  if (a.length <= 1) {
    return a;
  }
  return merge(
    mergeSort(a.slice(0, a.length / 2)),
    mergeSort(a.slice(a.length / 2))
  );
}
console.log(mergeSort(a));
