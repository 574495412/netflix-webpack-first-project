export default function changeLanguage(data) {
  return {
    type: "SET_LANGUAGE",
    payload: data,
  };
}

export function loaderStatus(status) {
  return {
    type: "SET_LOADER",
    payload: status,
  };
}
