import React, { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FoodContainer from "./containers/food-list";
import FoodDetailContainer from "./containers/food-detail";
import ReactVirtualizedTable from "./containers/testTalbe";

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
        <div>
          <ReactVirtualizedTable />
        </div>
        <h2>FoodDetail</h2>
        <FoodDetailContainer />
      </div>
    );
  }
}

export default App;
