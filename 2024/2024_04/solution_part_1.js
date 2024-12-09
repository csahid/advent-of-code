const fs = require("fs");

fs.readFile("input.txt", (_, _data) => {
  const data = convertToArrayOfStrings(_data);
  const template = "XMAS";
  const rows = data.length;
  const cols = data[0].length;

  let xmasCount = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (data[row][col] === template[0]) {
        // found an X
        for (let drow = -1; drow <= 1; drow++) {
          for (let dcol = -1; dcol <= 1; dcol++) {
            // skip the current cell
            if (dcol === 0 && drow === 0) continue;
            // check the cells around the current cell
            let allLettersFound = true;
            for (let templateIndex = 0; templateIndex < 4; templateIndex++) {
              const currCol = col + dcol * templateIndex;
              const currRow = row + drow * templateIndex;
              if (
                !isInsideGrid(currRow, currCol, rows, cols) ||
                data[currRow][currCol] !== template[templateIndex]
              ) {
                // next letter not found
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
