import axios from 'axios';

export const setData = (payload) => ({
    type: "SET_NEWS",
    payload,
});

export const setDataProg = (payload) => ({
    type: "SET_NEWS_PROG",
    payload,
});

export const setIsLoading = (payload) => ({
    type: "SET_ISLOADING",
    payload,
})


export const fetchNews = () => async(dispatch) => {
    const apiKey = "08f4f778371a46f49202ea1f7bda2d74";
    try {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`)
        await dispatch(setIsLoading(true));
        await dispatch(setData(res.data.articles));
        await dispatch(setIsLoading(false));
    } 
    catch (err) {
        console.error(err);
    }
 };

 export const fetchNewsProg = () => async(dispatch) => {
    const apiKey = "08f4f778371a46f49202ea1f7bda2d74";
    try {
        const res = await axios.get(`https://newsapi.org/v2/everything?q=coding&to=2022-04-26&sortBy=popularity&apiKey=${apiKey}`)
        await dispatch(setIsLoading(true));
        await dispatch(setDataProg(res.data.articles));
        await dispatch(setIsLoading(false));
    } 
    catch (err) {
        console.error(err);
    }
 };


