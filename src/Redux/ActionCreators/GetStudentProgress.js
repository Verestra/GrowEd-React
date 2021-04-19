import axios from "axios";

export const getStudentProgress = (url) => {
    const token = localStorage.getItem("token")
  return {
    type: "GET_STUDENTPROGRESS",
    payload: axios.get(url, {
        headers: { 'x-access-token' : token}
    }),
  };
};