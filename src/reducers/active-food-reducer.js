// const foods = [
//   {
//     id: 1,
//     name: "Buoi",
//     description: "Ngot nuoc",
//     Price: 30
//   },
//   {
//     id: 3,
//     name: "Cam",
//     description: "Ngot nuoc",
//     Price: 30
//   },
//   {
//     id: 2,
//     name: "Vu Sua",
//     description: "Ngot nuoc",
//     Price: 30
//   }
// ];

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
