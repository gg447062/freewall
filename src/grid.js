const makeGrid = (total) => {
  const gridList = [];
  for (let i = 0; i < total; i++) {
    const square = {};
    square.id = i;
    gridList.push(square);
  }
  return gridList;
};

export const mapGrid = makeGrid(10000);
