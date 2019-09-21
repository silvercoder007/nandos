const data = require("../testdata/data.js");
const parseDirection = require("./parseDirection.js");

describe("parseDirection", () => {
  const { grid } = data.data;
  it("should output 360 when given a N value", () => {
    expect(parseDirection("N")).toEqual(360);
  });
  it("should output 90 when given a E value", () => {
    expect(parseDirection("E")).toEqual(90);
  });
  it("should output 180 when given a S value", () => {
    expect(parseDirection("S")).toEqual(180);
  });
  it("should output 270 when given a W value", () => {
    expect(parseDirection("W")).toEqual(270);
  });
});
