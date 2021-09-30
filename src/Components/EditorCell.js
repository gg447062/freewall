import React from 'react';
import { connect } from 'react-redux';
import { paintPixels, toggleClick, selectColor } from '../Redux/pixelEditor';

class EditorCell extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { id, cellId, rowId } = this.props;
    this.props.paint(id, rowId, cellId);
  }

  render() {
    const { color } = this.props;
    return <td className={color} onClick={this.onClick}></td>;
  }
}

const mapDispatch = (dispatch) => {
  return {
    paint: (id, rowId, cellId) => dispatch(paintPixels(id, rowId, cellId)),
  };
};

export default connect(null, mapDispatch)(EditorCell);
