const initial = {
  lang: "English",
};

export default function LangReducer(state = initial, action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
}
 