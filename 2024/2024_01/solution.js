const fs = require("fs");

fs.readFile("input.txt", (_, data) => {
  const pairs = convertToArrayOfPairs(data);

  const sortedFirstElementsOfPairs = pairs
    .map((pair) => {
      const [firstElement, _] = pair;
      return parseInt(firstElement);
    })
    .sort(intComparator);

  const sortedSecondElementsOfPairs = pairs
    .map((pair) => {
      const [_, secondElement] = pair;
      return parseInt(secondElement);
    })
    .sort(intComparator);

  console.log(
    "Total distance: ",
    getTotalDistance(sortedFirstElementsOfPairs, sortedSecondElementsOfPairs),
  );
  console.log(
    "Similarity factor: ",
    getSimilarityFactor(
      sortedFirstElementsOfPairs,
      sortedSecondElementsOfPairs,
    ),
  );
});

function intComparator(a, b) {
  return a - b;
}

function convertToArrayOfPairs(data) {
  return data
    .toString()
    .trim()
    .split(/\n/)
    .map((line) => line.trim().split(/\s+/));
}

function getTotalDistance(list1, list2) {
  return list1.reduce((acc, item, index) => {
    return acc + Math.abs(item - list2[index]);
  }, 0);
}

function getSimilarityFactor(list1, list2) {
  return list1.reduce((acc, item) => {
    const similarities = list2.reduce((acc, item2) => {
      return item === item2 ? acc + 1 : acc;
    }, 0);
    return acc + item * similarities;
  }, 0);
}
