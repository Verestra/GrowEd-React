import axios from "axios";

export const getMyClassFasilitator = (url) => {
    const token = localStorage.getItem("token")
  return {
    type: "GET_MYCLASS_FASILITATOR",
    payload: axios.get(url, {
        headers: { 'x-access-token' : token}
    }),
  };
};