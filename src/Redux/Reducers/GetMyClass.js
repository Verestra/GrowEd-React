const initialState = {
    results: {},
    info: {},
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    err: {},
  };
  
  const getMyClassReducer = (state = initialState, { type, payload }) => {
      
    switch (type) {
      case "GET_MYCLASS_PAGINATED_PENDING":
        return {
          ...state,
          isPending: true,
          isFulfilled: false,
          isRejected: false,
        };
      case "GET_MYCLASS_PAGINATED_FULFILLED":
        return {
          ...state,
          isFulfilled: true,
          isPending: false,
          results: payload.data.result,
          info: payload.data.info,
        };
      case "GET_MYCLASS_PAGINATED_REJECTED":
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

  const getMyScoreReducer = (state = initialState, { type, payload }) => {
      
    switch (type) {
      case "GET_MYSCORE_PENDING":
        return {
          ...state,
          isPending: true,
          isFulfilled: false,
          isRejected: false,
        };
      case "GET_MYSCORE_FULFILLED":
        return {
          ...state,
          isFulfilled: true,
          isPending: false,
          results: payload.data.data[0],
        };
      case "GET_MYSCORE_REJECTED":
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
  
  
  export {getMyClassReducer, getMyScoreReducer};
  