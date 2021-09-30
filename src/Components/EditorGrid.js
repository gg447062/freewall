import React from 'react';
import EditorRow from './EditorRow';

export default class EditorGrid extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { grid } = this.props;
    return (
      <table>
        <tbody>
          {grid.map((row, rowId) => {
            return <EditorRow row={row} rowId={rowId} key={rowId} />;
          })}
        </tbody>
      </table>
    );
  }
}
