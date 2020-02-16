import React, { Component } from "react";
import { connect } from "react-redux";

class Loading extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    if (this.props.loading) {
      return (
        <div
          className="position-absolute h-100 w-100"
          style={{ backgroundColor: "#eeeeffad", 'zIndex': "3", pointerEvents: "none" }}
        ></div>
      );
    }
    return <></>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.Search.loading
  };
}

export default connect(mapStateToProps, null)(Loading);
