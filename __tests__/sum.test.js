// sum.test.js
const lib = require("../scripts/sum.js");

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

test("adds 1 + 2 to equal 3", () => {
  expect(lib.sum(1, 2)).toBe(3);
});
