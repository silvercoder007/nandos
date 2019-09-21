const data = require("../data/data.js");
const setupGrid = require("./setupGrid.js");

describe("setupGrid", () => {
  const { grid } = data.data;
  it("should setup a grid of 5 x 5 size", () => {
    expect(setupGrid(grid)).toEqual({ xMax: 5, yMax: 5 });
  });
  it("should setup a grid of 3 x 2 size", () => {
    const newGrid = "3 2";
    expect(setupGrid(newGrid)).toEqual({ xMax: 3, yMax: 2 });
  });
  it("should setup a grid of 0 x 0 size when no data present", () => {
    expect(setupGrid()).toEqual({ xMax: 0, yMax: 0 });
  });
});
