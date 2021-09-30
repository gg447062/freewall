import React from 'react';
import EditorGrid from './EditorGrid';
import { connect } from 'react-redux';

class PixelEditor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { grid } = this.props.editor;
    return (
      <div id="editor-container">
        <EditorGrid grid={grid} />
        <div>Color Picker</div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    editor: state.editor,
  };
};

export default connect(mapState, null)(PixelEditor);
