export default function loaderStatus(status) {
  return {
    type: "SET_LOADER",
    payload: status,
  };
}
