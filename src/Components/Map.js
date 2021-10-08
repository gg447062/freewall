import React from 'react';
import { mapGrid } from '../helper';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { hideMap } = this.props;
    return (
      <div id="map-container">
        {mapGrid.map((square) => (
          <div className="map-tile" key={square.id}></div>
        ))}
        <div onClick={hideMap}>back</div>
      </div>
    );
  }
}
