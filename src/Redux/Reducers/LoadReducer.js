const initial = {
  loader: false,
};

export default function LoadReducer(state = initial, action) {
  switch (action.type) {
    case "SET_LOADER":
      return {
        ...state,
        loader: action.payload,
      };

    default:
      return state;
  }
}
