const makeMapGrid = (total) => {
  const gridList = [];
  for (let i = 0; i < total; i++) {
    const square = {};
    square.id = i;
    gridList.push(square);
  }
  return gridList;
};

export const mapGrid = makeMapGrid(10000);

const makeEditorGrid = (rows, cells) => {
  const grid = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cells; j++) {
      const cell = {};

      cell.id = i * cells + j;
      cell.painted = false;
      cell.color = null;

      row.push(cell);
    }

    grid.push(row);
  }

  return grid;
};

export const pixelGrid = makeEditorGrid(40, 40);
