function countCats(matrix) {
  return matrix.reduce((count, arr) => count + arr.filter((el) => el === "^^").length, 0);
}

console.log(
  countCats([
    [0, 1, "^^"],
    [0, "^^", "^^"],
    ["^^", 1, 2],
  ])
);
