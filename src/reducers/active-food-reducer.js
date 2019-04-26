
const selecteItem = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_FOOD":
      return action.payload;

    default:
      return {};
  }
  return {};
};
export default selecteItem;
