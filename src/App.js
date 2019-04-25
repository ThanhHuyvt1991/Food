import React, { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FoodContainer from "./containers/food-list";
import FoodDetailContainer from "./containers/food-detail";

const stylesApp = {
  marginTop: 40
};

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={stylesApp} />
        <h2>List of Food</h2>
        <FoodContainer />
        <h2>FoodDetail</h2>
        <FoodDetailContainer />
      </div>
    );
  }
}

export default App;
