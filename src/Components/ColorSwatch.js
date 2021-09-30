import React from 'react';
import { selectColor } from '../Redux/pixelEditor';
import { connect } from 'react-redux';

class ColorSwatch extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.select(this.props.color);
  }

  render() {
    const { color } = this.props;
    return <div className={`swatch ${color}`} onClick={this.handleClick}></div>;
  }
}

const mapDispatch = (dispatch) => {
  return {
    select: (color) => dispatch(selectColor(color)),
  };
};

export default connect(null, mapDispatch)(ColorSwatch);
