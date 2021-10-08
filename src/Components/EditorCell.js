import React from 'react';
import { connect } from 'react-redux';
import { paintPixels, toggleClick } from '../Redux/pixelEditor';

class EditorCell extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleMouseDown() {
    const { cellId, rowId } = this.props;
    this.props.toggle();
    this.props.paint(rowId, cellId);
  }

  handleMouseUp() {
    this.props.toggle();
  }

  handleDrag() {
    const { clicked } = this.props.editor;
    if (clicked) {
      const { cellId, rowId } = this.props;
      this.props.paint(rowId, cellId);
    }
  }

  render() {
    const { color } = this.props;

    return (
      <td
        className={color}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseEnter={this.handleDrag}
      ></td>
    );
  }
}

const mapState = (state) => {
  return {
    editor: state.editor,
  };
};

const mapDispatch = (dispatch) => {
  return {
    paint: (rowId, cellId) => dispatch(paintPixels(rowId, cellId)),
    toggle: () => dispatch(toggleClick()),
  };
};

export default connect(mapState, mapDispatch)(EditorCell);
