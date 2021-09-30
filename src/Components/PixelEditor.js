import React from 'react';
import EditorGrid from './EditorGrid';
import { connect } from 'react-redux';
import { reset } from '../Redux/pixelEditor';

class PixelEditor extends React.Component {
  constructor(props) {
    super(props);

    this.reset = this.reset.bind(this);
  }

  reset() {
    this.props.reset();
  }

  render() {
    const { grid } = this.props.editor;
    return (
      <div id="editor-container">
        <EditorGrid grid={grid} />
        <div id="editor-controls">
          <div>Color Picker</div>
          <div onClick={this.reset}>Reset</div>
        </div>
      </div>
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
    reset: () => dispatch(reset()),
  };
};

export default connect(mapState, mapDispatch)(PixelEditor);
