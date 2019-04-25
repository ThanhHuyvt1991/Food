import React, { Component } from "react";
import { connect } from "react-redux";

class FoodDetail extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.activeFood.name}</p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    activeFood: state.activeFood
  };
}
const FoodDetailContainer = connect(mapStateToProps)(FoodDetail);
export default FoodDetailContainer;
