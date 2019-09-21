const parseCardinalDirection = require("./parseCardinalDirection.js");

describe("parseDirection", () => {
  it("should output N when given a 360 value", () => {
    expect(parseCardinalDirection(360)).toEqual('N');
  });
  it("should output E when given a 90 value", () => {
    expect(parseCardinalDirection(90)).toEqual('E');
  });
  it("should output S when given a 180 value", () => {
    expect(parseCardinalDirection(180)).toEqual('S');
  });
  it("should output W when given a 270 value", () => {
    expect(parseCardinalDirection(270)).toEqual('W');
  });
});