const initial = {
  lang: "English",
};

function languageReducer(state = initial, action) {
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
export default languageReducer;
