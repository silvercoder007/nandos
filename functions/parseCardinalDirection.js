exports.parseCardinalDirection = function(direction) {
  switch (direction) {
    case 360:
      return "N";
      break;
    case 270:
      return "W";
      break;
    case 180:
      return "S";
      break;
    case 90:
      return "E";
      break;
  }
};
