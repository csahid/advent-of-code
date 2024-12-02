const fs = require("fs");

fs.readFile("input.txt", (_, data) => {
  const arrayOfReportLevels = convertToArray(data);

  let count = 0;
  arrayOfReportLevels.forEach((level) => {
    if (isSorted(level) && isSafe(level)) {
      count++;
    } else if (isSafeByRemovingOne(level)) {
      count++;
    }
  });
  console.log(count);
});

function convertToArray(data) {
  return data
    .toString()
    .trim()
    .split("\n")
    .map((line) => {
      return line
        .trim()
        .split(" ")
        .map((num) => parseInt(num));
    });
}

function isSorted(array) {
  if (array.length < 2) {
    return true;
  }

  let ascending = true;
  let descending = true;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      ascending = false;
    } else if (array[i] < array[i + 1]) {
      descending = false;
    }
  }
  return ascending || descending;
}

function isSafe(array) {
  for (let i = 0; i < array.length - 1; i++) {
    const compare = Math.abs(array[i + 1] - array[i]);
    if (compare < 1 || compare > 3) {
      return false;
    }
  }
  return true;
}

function isSafeByRemovingOne(array) {
  for (let i = 0; i < array.length; i++) {
    const copy = array.toSpliced(i, 1);
    if (isSorted(copy) && isSafe(copy)) {
      return true;
    }
  }
  return false;
}
