export default function addFav(status) {
  return {
    type: "SET_FAV",
    payload: status,
  };
}
