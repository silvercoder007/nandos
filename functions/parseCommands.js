const { parseCardinalDirection } = require("./parseCardinalDirection.js");

exports.parseCommands = function(
  commandArray,
  xValue,
  yValue,
  direction,
  { xMax, yMax }
) {
  let newDirection = direction;
  let error = "";
  return (newCoordArray = commandArray.map(command => {
    if (command.toUpperCase() === "L") {
      newDirection = direction - 90;
      if (newDirection === 0) {
        newDirection = 360;
      }
      direction = newDirection;
      return {
        xValue: xValue,
        yValue: yValue,
        direction: parseCardinalDirection(newDirection)
      };
    }
    if (command.toUpperCase() === "M") {
      if (direction === 360) {
        yValue++;
        if (yValue > yMax) {
          error = `The rover went out of the grid limits. Coords: xValue: ${xValue}, yValue: ${yValue} direction: ${parseCardinalDirection(
            newDirection
          )}`;
        }
        return {
          xValue: xValue,
          yValue: yValue,
          direction: parseCardinalDirection(newDirection),
          error: error
        };
      }
      if (direction === 90) {
        xValue++;
        if (xValue > xMax) {
          error = `The rover went out of the grid limits. Coords: xValue: ${xValue}, yValue: ${yValue} direction: ${parseCardinalDirection(
            newDirection
          )}`;
        }
        return {
          xValue: xValue,
          yValue: yValue,
          direction: parseCardinalDirection(newDirection),
          error: error
        };
      }
      if (direction === 180) {
        yValue--;
        if (yValue < 0) {
          error = `The rover went out of the grid limits. Coords: xValue: ${xValue}, yValue: ${yValue} direction: ${parseCardinalDirection(
            newDirection
          )}`;
        }
        return {
          xValue: xValue,
          yValue: yValue,
          direction: parseCardinalDirection(newDirection),
          error: error
        };
      }
      if (direction === 270) {
        xValue--;
        if (xValue < 0) {
          error = `The rover went out of the grid limits. Coords: xValue: ${xValue}, yValue: ${yValue} direction: ${parseCardinalDirection(
            newDirection
          )}`;
        }
        return {
          xValue: xValue,
          yValue: yValue,
          direction: parseCardinalDirection(newDirection),
          error: error
        };
      }
    }
    if (command.toUpperCase() === "R") {
      newDirection = direction + 90;
      if (newDirection === 360) {
        newDirection = 0;
      }
      direction = newDirection;
      return {
        xValue: xValue,
        yValue: yValue,
        direction: parseCardinalDirection(newDirection)
      };
    }
  }));
};
