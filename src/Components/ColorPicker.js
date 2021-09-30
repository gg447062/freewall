import React from 'react';
import ColorSwatch from './ColorSwatch';

const colorList = [
  { name: 'black' },
  { name: 'white' },
  { name: 'red' },
  { name: 'blue' },
  { name: 'yellow' },
  { name: 'orange' },
  { name: 'green' },
  { name: 'purple' },
  { name: 'pink' },
];

export default class ColorPicker extends React.Component {
  render() {
    return (
      <div id="swatch-container">
        {colorList.map((color) => {
          return <ColorSwatch key={color.name} color={color.name} />;
        })}
      </div>
    );
  }
}
