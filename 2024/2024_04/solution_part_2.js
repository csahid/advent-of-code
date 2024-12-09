const fs = require("fs");

fs.readFile("input.txt", (_, _data) => {
  const data = convertToArrayOfStrings(_data);
  const possibleLetters = ["M", "S"];
  const rows = data.length;
  const cols = data[0].length;

  let xmasCount = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (data[row][col] === "A") {
        // found an A
        const checkableCoordinates = [
          [-1, -1],
          [-1, 1],
        ];
        let allLettersFound = true;
        for (const [drow, dcol] of checkableCoordinates) {
          if (
            !isInsideGrid(row + drow, col + dcol, rows, cols) ||
            !isInsideGrid(row + drow * -1, col + dcol * -1, rows, cols) ||
            !possibleLetters.includes(data[row + drow][col + dcol]) ||
            !possibleLetters.includes(data[row + drow * -1][col + dcol * -1]) ||
            data[row + drow][col + dcol] ===
              data[row + drow * -1][col + dcol * -1]
          ) {
            allLettersFound = false;
            break;
          }
        }
        if (allLettersFound) {
          xmasCount++;
        }
      }
    }
  }
  console.log(xmasCount);
});

function convertToArrayOfStrings(data) {
  return data
    .toString()
    .trim()
    .split(/\n/)
    .map((line) => line.trim());
}

function isInsideGrid(row, col, rows, cols) {
  return 0 <= row && row < rows && 0 <= col && col < cols;
}
