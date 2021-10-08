import { pixelGrid, paint } from '../helper';

const initialState = {
  grid: pixelGrid,
  color: 'black',
  clicked: false,
  brush: 'small',
};

// action types

const SELECT_COLOR = 'SELECT_COLOR';
const PAINT = 'PAINT';
const TOGGLE = 'TOGGLE';
const SELECT_BRUSH = 'SELECT_BRUSH';
const RESET = 'RESET';

// action creators

export const selectColor = (color) => {
  return {
    type: SELECT_COLOR,
    color: color,
  };
};

export const paintPixels = (row, cell) => {
  return {
    type: PAINT,
    row: row,
    cell: cell,
  };
};

export const toggleClick = () => {
  return {
    type: TOGGLE,
  };
};

export const selectBrush = (brush) => {
  return {
    type: SELECT_BRUSH,
    brush: brush,
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
      const gridCopy = [...state.grid];
      const newGrid = paint(
        gridCopy,
        action.row,
        action.cell,
        state.brush,
        state.color
      );
      return { ...state, grid: newGrid };
    case SELECT_COLOR:
      return { ...state, color: action.color };
    case TOGGLE:
      return { ...state, clicked: !state.clicked };
    case SELECT_BRUSH:
      return { ...state, brush: action.brush };
    case RESET:
      return {
        ...state,
        grid: initialState.grid,
        clicked: initialState.clicked,
      };
    default:
      return state;
  }
};

export default editorReducer;
