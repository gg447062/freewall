import React from 'react';

export default class EditorCell extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id } = this.props;
    return <div className="pixel-cell">{id}</div>;
  }
}
