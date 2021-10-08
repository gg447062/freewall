import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBrush } from '../Redux/pixelEditor';

export const Toolbar = () => {
  const brush = useSelector((state) => state.editor.brush);
  const dispatch = useDispatch();

  return (
    <div id="toolbar-container">
      <div id="current-brush">current: {brush}</div>
      <div id="brush-container">
        <div
          className={'toolbar-item'}
          onClick={() => dispatch(selectBrush('large'))}
        >
          large
        </div>
        <div
          className={'toolbar-item'}
          onClick={() => dispatch(selectBrush('small'))}
        >
          small
        </div>
        <div
          className={'toolbar-item'}
          onClick={() => dispatch(selectBrush('fill'))}
        >
          fill
        </div>
        <div
          className={'toolbar-item'}
          onClick={() => dispatch(selectBrush('erase'))}
        >
          erase
        </div>
      </div>
    </div>
  );
};
