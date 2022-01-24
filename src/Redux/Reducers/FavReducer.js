const initial = {
  favorite: false,
};

export default function FavReducer(state = initial, action) {
  switch (action.type) {
    case "SET_FAV":
      return {
        ...state,
        favorite: action.payload,
      };

    default:
      return state;
  }
}
