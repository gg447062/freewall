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

      cell.painted = false;
      cell.color = 'grey';

      row.push(cell);
    }

    grid.push(row);
  }

  return grid;
};

const gridSize = 32;

export const pixelGrid = makeEditorGrid(gridSize, gridSize);

export const paint = (grid, row, cell, brush, color) => {
  grid[row] = [...grid[row]];

  const newCell = {
    painted: true,
    color: color,
  };

  if (brush === 'small') {
    grid[row][cell] = newCell;
  } else if (brush === 'large') {
    const lastColumn = cell === gridSize - 1;
    const lastRow = row === gridSize - 1;

    if (lastColumn && lastRow) {
      grid[row][cell] = newCell;
    } else if (lastColumn) {
      grid[row + 1] = [...grid[row + 1]];
      grid[row][cell] = newCell;
      grid[row + 1][cell] = newCell;
    } else if (lastRow) {
      grid[row][cell] = newCell;
      grid[row][cell + 1] = newCell;
    } else {
      grid[row + 1] = [...grid[row + 1]];
      grid[row][cell] = newCell;
      grid[row][cell + 1] = newCell;
      grid[row + 1][cell] = newCell;
      grid[row + 1][cell + 1] = newCell;
    }
  } else if (brush === 'fill') {
    const prevColor = grid[row][cell].color;

    grid.map((gridRow) => {
      const spreadRow = [...gridRow];
      spreadRow.map((gridCell) => {
        if (!gridCell.painted || gridCell.color === prevColor) {
          gridCell.painted = true;
          gridCell.color = color;
        }
      });
    });
  } else if (brush === 'erase') {
    grid[row][cell] = { painted: false, color: 'grey' };
  }

  return grid;
};
