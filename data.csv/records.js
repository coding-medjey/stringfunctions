function records(title, record) {
  let titleLength = title.length;

  let array = [];

  let object = {};

  let i = 0;
  while (i < titleLength) {
    object[title[i]] = record[i];
    i++;
  }
  return object;
}

function groupOfRecords(title, record) {
  let array = [];
  let length = record.length;
  let i = 0;
  while (i < length) {
    let input = record[i];
    array.push(records(title, input));
    i++;
  }
  return array;
}

exports.groupOfRecords = groupOfRecords;
