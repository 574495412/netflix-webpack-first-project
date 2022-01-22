const initial = {
  lang: "English",
  loader: false,
};

export default function Reducer(state = initial, action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        lang: action.payload,
      };

    case "SET_LOADER":
      return {
        ...state,
        loader: action.payload,
      };

    default:
      return state;
  }
}
