const { calculateFinalCoord } = require("./calculateFinalCoord.js");
const setupGrid = require("./setupGrid.js");

exports.output = function({ grid, rovers }) {
  const gridLimits = setupGrid(grid);
  const finalRoverCoords = rovers.map(rovers => {
    return calculateFinalCoord(rovers, gridLimits);
  });
  console.log(finalRoverCoords);
};
