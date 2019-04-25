import FoodReducer from "./food-reducer";
import UserReducer from "./user-reducer";
import { combineReducers } from "redux";
import ActiveFoodReducer from "./active-food-reducer";
const allReducers = combineReducers({
  foods: FoodReducer,
  users: UserReducer,
  activeFood: ActiveFoodReducer
});
export default allReducers;
