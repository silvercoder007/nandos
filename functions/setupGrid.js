function setupGrid(grid) {
  if (!grid) return { xMax: 0, yMax: 0 };
  const gridValues = grid.split(" ");
  return {
    xMax: parseInt(gridValues[0]),
    yMax: parseInt(gridValues[1])
  };
}

module.exports = setupGrid;
