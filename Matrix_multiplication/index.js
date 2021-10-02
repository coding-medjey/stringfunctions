let fs = require("fs");

const functions_module = require("./matrix_multiplication.js");

fs.readFile("./input.json", "utf8", (err, data) => {
  if (err) {
    throw err;
  }

  let matrix = JSON.parse(data);

  let matrix1 = Object.values(matrix[0])[0];

  let matrix2 = Object.values(matrix[1])[0];

  console.log(functions_module.multiplyMatrix(matrix1, matrix2));
});
