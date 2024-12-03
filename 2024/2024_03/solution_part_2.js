const fs = require("fs");

const MUL_REGEX = /mul\((\d{1,3}),(\d{1,3})\)/g;
const REMOVE_REGEX = /don't\(\)[\s\S]*?do\(\)/g;

fs.readFile("input.txt", (_, data) => {
  data = data.toString().replace(REMOVE_REGEX, "");
  const validMulPairs = getValideMulPairs(data);
  const result = validMulPairs.reduce((acc, [a, b]) => acc + a * b, 0);
  console.log(result);
});

function getValideMulPairs(data) {
  return [...data.toString().matchAll(MUL_REGEX)].map((match) => [
    parseInt(match[1]),
    parseInt(match[2]),
  ]);
}
