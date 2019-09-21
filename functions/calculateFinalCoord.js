const parseDirection = require("./parseDirection.js");
const { parseCommands } = require("./parseCommands.js");

exports.calculateFinalCoord = function({ startCoords, commands }, gridLimits) {
  const coordinates = startCoords.split(" ");
  const xValue = parseInt(coordinates[0]);
  const yValue = parseInt(coordinates[1]);
  const direction = parseDirection(coordinates[2].toUpperCase());
  const commandArray = commands.split("");
  return (finalCoords = parseCommands(
    commandArray,
    xValue,
    yValue,
    direction,
    gridLimits
  ).pop());
};
