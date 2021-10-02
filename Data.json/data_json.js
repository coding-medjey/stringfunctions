let fs = require("fs");

fs.readFile("input.json", "utf8", (err, data) => {
  if (err) {
    throw err;
  }

  let obj = JSON.parse(data);

  let key = Object.keys(obj[0]);

  let i = 0;

  let values = [];

  while (i < obj.length) {
    let object = obj[i];
    values.push(Object.values(object));
    i++;
  }

  let output = [key.join()];
  let j = 0;
  while (j < values.length) {
    let o = values[j];
    output.push(o.join());
    j++;
  }

  let stringOutput = output.join("\r\n");

  fs.writeFile("./output.csv", stringOutput, (err) => {
    if (err) {
      throw err;
    }
  });
});
