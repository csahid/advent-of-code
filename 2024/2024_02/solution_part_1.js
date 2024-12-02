const fs = require("fs");

fs.readFile("input.txt", (_, data) => {
  const arrayOfReportLevels = convertToArray(data);
  const partOneResult = arrayOfReportLevels.reduce((acc, current) => {
    const ascendingOrder = current.toSorted((a, b) => a - b);
    const descendingOrder = current.toSorted((a, b) => b - a);
    let isDiffValid = false;
    if (current.equals(ascendingOrder)) {
      // check if 1<= (n+1)-n <= 3
      isDiffValid = current.every((num, index, arr) => {
        if (index + 1 == arr.length) return true;
        return 1 <= arr[index + 1] - num && arr[index + 1] - num <= 3;
      });
    }

    if (current.equals(descendingOrder)) {
      // check if 1<= n-(n+1) <= 3
      isDiffValid = current.every((num, index, arr) => {
        if (index + 1 == arr.length) return true;
        return 1 <= num - arr[index + 1] && num - arr[index + 1] <= 3;
      });
    }

    return isDiffValid ? acc + 1 : acc;
  }, 0);
  console.log("Part 1:", partOneResult);
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

Array.prototype.equals = function (array) {
  if (!array) return false;

  if (this.length !== array.length) return false;

  for (let i = 0; i < this.length; i++) {
    if (this[i] !== array[i]) return false;
  }
  return true;
};
