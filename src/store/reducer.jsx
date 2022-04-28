const initialState = {
    news: [],
    newsProg: [],
    newsCovid: [],
    newsSearch: [],
    isLoading: false,
  };
  const reducers = (state = initialState, action) => {
    switch (action.type) {
     case "SET_NEWS" :
       return {
         ...state,
         news: action.payload,
         newsCovid: action.payload,
         newsProg: action.payload,
         newsSearch: action.payload,
       };
      case "SET_ISLOADING":
        return {
          ...state,
          isLoading: action.payload,
        };
      default:
        return state;
    }
  };



  export default reducers;