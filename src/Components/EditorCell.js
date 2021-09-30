import React from 'react';
import { connect } from 'react-redux';
import { paintPixels, toggleClick } from '../Redux/pixelEditor';

class EditorCell extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { id, cellId, rowId } = this.props;
    this.props.paint(id, rowId, cellId);
  }

  handleMouseDown() {
    const { id, cellId, rowId } = this.props;
    this.props.toggle();
    this.props.paint(id, rowId, cellId);
  }

  handleMouseUp() {
    this.props.toggle();
  }

  handleDrag() {
    const { clicked } = this.props.editor;
    if (clicked) {
      const { id, cellId, rowId } = this.props;
      this.props.paint(id, rowId, cellId);
    }
  }

  render() {
    const { color } = this.props;

    return (
      <td
        className={color}
        onClick={this.handleClick}
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
    paint: (id, rowId, cellId) => dispatch(paintPixels(id, rowId, cellId)),
    toggle: () => dispatch(toggleClick()),
  };
};

export default connect(mapState, mapDispatch)(EditorCell);
