const initialState = {
    results: {},
    info: {},
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    err: {},
  };
  
  const getStudentProgressReducer = (state = initialState, { type, payload }) => {
      
    switch (type) {
      case "GET_STUDENTPROGRESS_PENDING":
        return {
          ...state,
          isPending: true,
          isFulfilled: false,
          isRejected: false,
        };
      case "GET_STUDENTPROGRESS_FULFILLED":
        return {
          ...state,
          isFulfilled: true,
          isPending: false,
          results: payload.data.data,
        };
      case "GET_STUDENTPROGRESS_REJECTED":
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

  export default getStudentProgressReducer