let fs = require("fs");

let functions_module = require("./records");

fs.readFile("./input.csv", "utf8", (err, data) => {
  if (err) {
    throw err;
  }

  let separator = "\r\n";

  let result = data.split(separator);

  let i = 1;

  let input = [];

  let arrtitle = result[0];

  let title = arrtitle.split(",");

  while (i < result.length) {
    string = result[i];
    input.push(string.split(","));
    i++;
  }

  let output = JSON.stringify(functions_module.groupOfRecords(title, input));

  fs.writeFile("./output.json", output, (err) => {
    if (err) {
      throw err;
    }
  });
});
