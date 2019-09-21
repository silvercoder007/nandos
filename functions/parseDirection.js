function parseDirection(direction) {
  switch (direction) {
    case "N":
      return 360;
      break;
    case "E":
      return 90;
      break;
    case "S":
      return 180;
      break;
    case "W":
      return 270;
      break;
  }
}

module.exports = parseDirection;
