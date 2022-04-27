// import { SET_SAVED } from "./actions";

const initialState = {
    news: [],
    newsProg: [],
    newsCovid: [],
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
       };
      case "SET_ISLOADING":
        return {
          ...state,
          isLoading: action.payload,
        };
        
      // case SET_SAVED: {
      //   return {
      //     ...state, 
      //     news: action.payload,
      //   }
      // } 
      default:
        return state;
    }
  };

// export const saveNews = () => async (dispatch, getState) => {
//      const news = getState().news;
//      await fetch('http://localhost:3000/Saved' ,{
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(news)
//       }),
//       alert('Success')
//   }

  export default reducers;