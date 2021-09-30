import { combineReducers } from 'redux';
import editorReducer from './pixelEditor';

const appReducer = combineReducers({
  editor: editorReducer,
});

export default appReducer;
