const initialState = {
    results: {},
    info: {},
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    err: {},
  };
  
  const getAllCoursesReducer = (state = initialState, { type, payload }) => {
      
    switch (type) {
      case "GET_ALLCOURSES_PAGINATED_PENDING":
        return {
          ...state,
          isPending: true,
          isFulfilled: false,
          isRejected: false,
        };
      case "GET_ALLCOURSES_PAGINATED_FULFILLED":
        return {
          ...state,
          isFulfilled: true,
          isPending: false,
          results: payload.data.result,
          info: payload.data.info,
        };
      case "GET_ALLCOURSES_PAGINATED_REJECTED":
        return {
          ...state,
          isRejected: true,
          isPending: false,
          err: payload,
        };
      default:
        return state;
    }
  };

  export {getAllCoursesReducer}