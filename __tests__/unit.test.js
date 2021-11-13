// unit.test.js

const functions = require("../code-to-unit-test/unit-test-me.js");

// Phone number tests
test("Uses 11111-1", () => {
  expect(functions.isPhoneNumber("11111-1")).toBe(false);
});
test("Uses empty number", () => {
  expect(functions.isPhoneNumber("")).toBe(false);
});
test("Uses squid game number", () => {
  expect(functions.isPhoneNumber("8650-4000")).toBe(true);
});
test("Uses random number", () => {
  expect(functions.isPhoneNumber("1-310-567-9030")).toBe(true);
});

//Email tests
test("Uses starts with @", () => {
  expect(functions.isEmail("@email.com")).toBe(false);
});
test("Uses no .", () => {
  expect(functions.isEmail("me@email")).toBe(false);
});
test("Uses my email", () => {
  expect(functions.isEmail("gduntuga@ucsd.edu")).toBe(true);
});
test("Uses fake email", () => {
  expect(functions.isEmail("email@email.com")).toBe(true);
});

//Password tests
test("First not letter", () => {
  expect(functions.isStrongPassword("12345")).toBe(false);
});
test("16 characters", () => {
  expect(functions.isStrongPassword("asdfasdfasdfasdf")).toBe(false);
});
test("minimum reqs", () => {
  expect(functions.isStrongPassword("aAaA")).toBe(true);
});
test("mixed characters", () => {
  expect(functions.isStrongPassword("aAbB2354__jd")).toBe(true);
});

// Date tests
test("one digit for all spaces", () => {
  expect(functions.isDate("1/1/1")).toBe(false);
});
test("3 digits in some 2 digit space", () => {
  expect(functions.isDate("333/3/2020")).toBe(false);
});
test("today", () => {
  expect(functions.isDate("12/13/2021")).toBe(true);
});
test("today but in england", () => {
  expect(functions.isDate("13/12/2021")).toBe(true);
});

//Hex color tests
test("empty", () => {
  expect(functions.isHexColor("")).toBe(false);
});
test("4 character", () => {
  expect(functions.isHexColor("#0000")).toBe(false);
});
test("3 character", () => {
  expect(functions.isHexColor("#000")).toBe(true);
});
test("6 character", () => {
  expect(functions.isHexColor("#FFFFFF")).toBe(true);
});
