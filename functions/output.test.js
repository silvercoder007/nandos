const { output } = require("./output.js");
const { data } = require("../data/data.js");

describe("output", () => {
  it("should exist", () => {
    expect(output).toBeTruthy();
  });
  it("return 13N & 51E as the final coordinates", () => {
    expect(output(data)).toEqual([
      { xValue: 1, yValue: 3, direction: "N", error: "" },
      { xValue: 5, yValue: 1, direction: "E", error: "" }
    ]);
  });
});
