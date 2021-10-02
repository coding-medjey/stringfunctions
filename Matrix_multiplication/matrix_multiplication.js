function Col(arr) {
  let result = [];
  let i = 0;
  while (i < arr[0].length) {
    result[i] = [];
    let j = 0;
    while (j < arr.length) {
      result[i].push(arr[j][i]);
      j++;
    }
    i++;
  }
  return result;
}

function sum(mat1, mat2) {
  let col = Col(mat2);
  let result = [];
  let i = 0;
  while (i < mat1.length) {
    if (mat1[0].length !== mat2.length) {
      break;
    }
    let k = 0;
    result[i] = [];
    while (k < mat2[0].length) {
      let sum = 0;
      let j = 0;
      while (j < mat1.length) {
        sum += mat1[k][j] * col[i][j];
        j++;
      }
      result[i].push(sum);
      k++;
    }
    i++;
  }
  let answer = Col(result);
  return answer;
}

console.log(sum([[8], [7], [12]], [[1], [4], [5]]));
