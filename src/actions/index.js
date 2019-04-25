export const selectFood = food => {
  console.log("You click name =" + food.name);
  return {
    type: "SELECT_FOOD",
    payload: food,
    age: 30
  };
};
