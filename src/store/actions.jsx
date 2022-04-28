import axios from 'axios';

export const setData = (payload) => ({
    type: "SET_NEWS",
    payload,
});

export const setIsLoading = (payload) => ({
    type: "SET_ISLOADING",
    payload,
});

export const fetchNews = () => async(dispatch) => {
    const apiKey = "7ac509953f2b474181234c50d273d957";
    try {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`)
        await dispatch(setIsLoading(true));
        await dispatch(setData(res.data.articles));
        await dispatch(setIsLoading(false));
    } 
    catch (err) {
        console.error(err);
    }
}
 export const fetchNewsProg = () => async(dispatch) => {
    const apiKey = "7ac509953f2b474181234c50d273d957";
    try {
        const res = await axios.get(`https://newsapi.org/v2/everything?q=coding&to=2022-04-28&sortBy=popularity&apiKey=${apiKey}`)
        await dispatch(setIsLoading(true));
        await dispatch(setData(res.data.articles));
        await dispatch(setIsLoading(false));
    } 
    catch (err) {
        console.error(err);
    }
 }

 export const fetchNewsCovid = () => async(dispatch) => {
    const apiKey = "7ac509953f2b474181234c50d273d957";
    try {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?q=covid&to=2022-04-30&apiKey=${apiKey}`)
        await dispatch(setIsLoading(true));
        await dispatch(setData(res.data.articles));
        await dispatch(setIsLoading(false));
    } 
    catch (err) {
        console.error(err);
    }
 }

 export const fetchNewsSearch = (term) => async( dispatch) => {
    const apiKey = "7ac509953f2b474181234c50d273d957";
    
    try {
        const res = await axios.get(`https://newsapi.org/v2/everything?q=${term}&apiKey=${apiKey}`)
        await dispatch(setIsLoading(true));
        await dispatch(setData(res.data.articles));
        await dispatch(setIsLoading(false));
    } 
    catch (err) {
        console.error(err);
    }
}


