import axios from "axios";

export const getMyClassPaginated = (url) => {
    const token = localStorage.getItem("token")
  return {
    type: "GET_MYCLASS_PAGINATED",
    payload: axios.get(url, {
        headers: { 'x-access-token' : token}
    }),
  };
};

export const getMyClassScore = (url) => {
  const token = localStorage.getItem("token")
return {
  type: "GET_MYSCORE",
  payload: axios.get(url, {
      headers: { 'x-access-token' : token}
  }),
};
};