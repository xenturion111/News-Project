const initialState = {
    news: [],
    newsProg: [],
    isLoading: false,
  };
  const reducers = (state = initialState, action) => {
    switch (action.type) {
     case "SET_NEWS" :
       return {
         ...state,
         news: action.payload,
       };
      case "SET_ISLOADING":
        return {
          ...state,
          isLoading: action.payload,
        };
      case "SET_NEWS_PROG": 
        return {
          ...state,
          newsProg: action.payload,
        };
      default:
        return state;
    }
  };
  export default reducers;