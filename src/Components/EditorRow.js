import React from 'react';
import EditorCell from './EditorCell';

export default class EditorRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { row, rowId } = this.props;
    return (
      <tr>
        {row.map((cell, cellId) => {
          return (
            <EditorCell
              color={cell.color}
              rowId={rowId}
              cellId={cellId}
              id={cell.id}
              key={cell.id}
            />
          );
        })}
      </tr>
    );
  }
}
