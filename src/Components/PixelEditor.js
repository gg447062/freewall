import React from 'react';
import EditorGrid from './EditorGrid';
import { pixelGrid } from '../grids';

export default class PixelEditor extends React.Component {
  render() {
    return (
      <div>
        <EditorGrid grid={pixelGrid} />
        <div>Color Picker</div>
      </div>
    );
  }
}
