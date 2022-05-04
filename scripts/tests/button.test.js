/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button.js");

beforeEach(() => {
  let fs = require("fs");
  const fileContents = fs.readFileSync('index.html', 'utf8');

  document.documentElement.innerHTML = fileContents.toString();
  
  // let fileContents = fs.readFileSync("index.html", "utf-8");
  // document.open();
  // document.write(fileContents);
  // document.close();
});

//describe divide our tests in sections
describe("DOM test", () => {
  test("Expects p content to change", () => {
    buttonClick();
    expect(document.getElementById("par").innerText).toEqual("You Clicked!");
  });
  test("h1 should exist", () => {
    expect(document.getElementsByTagName("h1").length).toBe(1);
  });
});