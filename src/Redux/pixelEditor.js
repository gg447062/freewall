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
const RESET = 'RESET';

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

export const reset = () => {
  return {
    type: RESET,
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
    case SELECT_COLOR:
      return { ...state, color: action.color };
    case TOGGLE:
      return { ...state, clicked: !state.clicked };
    case RESET:
      state = initialState;
      return { ...state, grid: initialState.grid };
    default:
      return state;
  }
};

export default editorReducer;
