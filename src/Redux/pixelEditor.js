import { pixelGrid } from '../grids';

const initialState = {
  grid: pixelGrid,
  color: 'black',
  clicked: false,
};

// action types

const SELECT_COLOR = 'SELECT_COLOR';
const PAINT = 'PAINT';
const TOGGLE = 'TOGGLE';

// action creators

export const selectColor = (color) => {
  return {
    type: SELECT_COLOR,
    color: color,
  };
};

export const paintPixels = (id, row, cell) => {
  return {
    type: PAINT,
    id: id,
    row: row,
    cell: cell,
  };
};

export const toggleClick = () => {
  return {
    type: TOGGLE,
  };
};

const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAINT:
      const newGrid = [...state.grid];
      newGrid[action.row] = [...newGrid[action.row]];
      newGrid[action.row][action.cell] = {
        id: action.id,
        painted: true,
        color: state.color,
      };
      return { ...state, grid: newGrid };
    case TOGGLE:
      return { ...state, clicked: !state.clicked };
    default:
      return state;
  }
};

export default editorReducer;
