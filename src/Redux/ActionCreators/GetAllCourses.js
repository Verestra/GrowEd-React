import axios from "axios";

export const getAllCoursesPaginated = (url) => {
    const token = localStorage.getItem("token")
  return {
    type: "GET_ALLCOURSES_PAGINATED",
    payload: axios.get(url, {
        headers: { 'x-access-token' : token}
    }),
  };
};