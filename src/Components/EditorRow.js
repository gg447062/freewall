import React from 'react';
import EditorCell from './EditorCell';

export default class EditorRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { row } = this.props;
    return (
      <div>
        {row.map((cell) => {
          <EditorCell id={cell.id} key={cell.id} />;
        })}
      </div>
    );
  }
}
