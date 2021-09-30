import React from 'react';
import EditorRow from './EditorRow';

export default class EditorGrid extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { grid } = this.props;
    return (
      <div>
        {grid.map((row, rowIndex) => {
          <EditorRow row={row} key={rowIndex} />;
        })}
      </div>
    );
  }
}
