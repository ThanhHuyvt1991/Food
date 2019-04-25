import React, { Component } from "react";
import { connect } from "react-redux";
import { selectFood } from "../actions/index";
import { bindActionCreators } from "redux";

class FoodList extends React.Component {
  createFoodListItems() {
    const listItems = this.props.foods.map(eachFood => {
      return (
        <li
          key={eachFood.id}
          onClick={() => {
            this.props.selectFood(eachFood);
          }}
        >
          Food Name: {eachFood.name}{" "}
        </li>
      );
    });
    return listItems;
  }
  render() {
    return <ul>{this.createFoodListItems()}</ul>;
  }
}
function mapStateToProps(state) {
  return {
    foods: state.foods
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectFood }, dispatch);
}
const FoodContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodList);
export default FoodContainer;
