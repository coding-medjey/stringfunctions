function slice(str, startindex, endindex) {
  let result = "";
  if (startindex < 0) {
    startindex = str.length + startindex;
  }
  if (endindex < 0) {
    endindex = str.length + endindex;
  }
  let i = startindex;
  if (endindex === undefined) {
    endindex = Infinity;
  }
  while (i < str.length && i < endindex) {
    result = result + str[i];
    i++;
  }
  return result;
}

exports.slice = slice;

function indexOf(string, substring, fromindex) {
  let index = -1;
  if (fromindex === undefined) {
    fromindex = 0;
  }
  while (fromindex + substring.length - 1 < string.length) {
    let resultString = slice(string, fromindex, fromindex + substring.length);
    if (resultString === substring) {
      index = fromindex;
      break;
    }
    fromindex++;
  }
  return index;
}

function includes(string, substring) {
  if (indexOf(string, substring) !== -1) {
    return true;
  } else {
    return false;
  }
}

function split(string, seprator) {
  let result = [];
  let startindex = 0;

  let indexOfseparator = indexOf(string, seprator, startindex);
  while (indexOfseparator !== -1) {
    result.push(slice(string, startindex, indexOfseparator));
    startindex = indexOfseparator + seprator.length;
    indexOfseparator = indexOf(string, seprator, startindex);
  }
  result.push(slice(string, startindex));

  return result;
}

function startswith(string, substring) {
  return indexOf(string, substring) === 0;
}

function reverse(string) {
  let result = "";
  let reverse = string.length;
  while (reverse > 0) {
    reverse -= 1;
    result = result + string[reverse];
  }
  return result;
}

function endswith(string, substring) {
  return startswith(reverse(string), reverse(substring));
}

function toUppercase(string) {
  let result = "";
  let i = 0;
  while (i < string.length) {
    let charCodeAt = string.charCodeAt(i);
    if (charCodeAt >= 97 && charCodeAt <= 122) {
      result = result + String.fromCharCode(charCodeAt - 32);
    } else {
      result = result + String.fromCharCode(charCodeAt);
    }

    i++;
  }
  return result;
}

function toLowerCase(string) {
  let result = "";
  let i = 0;
  while (i < string.length) {
    let charCodeAt = string.charCodeAt(i);
    if (charCodeAt >= 65 && charCodeAt <= 97) {
      result = result + String.fromCharCode(charCodeAt + 32);
    } else {
      result = result + String.fromCharCode(charCodeAt);
    }
    i++;
  }
  return result;
}

function replace(string, remove_substring, add_substring) {
  let result = "";
  let remove = split(string, remove_substring);
  result = join(remove, add_substring);
  return result;
}

function join(array, substring) {
  let result = "";
  let startindex = 0;
  while (startindex < array.length - 1) {
    result = result + array[startindex] + substring;
    startindex++;
  }
  result = result + array[array.length - 1];
  return result;
}

function padEnd(string, substring, i) {
  let result = "";
  let startindex = 0;
  while (startindex < i) {
    if (i <= string.length) {
      return string;
    }
    if (startindex < 1) {
      result = result + string;
    }
    result = result + substring;
    startindex++;
    if (result.length === i) {
      break;
    }
  }

  return result;
}

exports.slice = slice;

exports.indexOf = indexOf;

exports.includes = includes;

exports.split = split;

exports.startswith = startswith;

exports.reverse = reverse;

exports.endswith = endswith;

exports.toUppercase = toUppercase;

exports.toLowerCase = toLowerCase;

exports.replace = replace;

exports.join = join;

exports.padEnd = padEnd;
