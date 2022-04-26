import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CovidContext = createContext();

export const CovidContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "7ac509953f2b474181234c50d273d957";


  // const request1 = axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`);
  // const request2 =  axios.get(`https://newsapi.org/v2/everything?q=apple&from=2022-04-20&to=2022-04-20&sortBy=popularity&apiKey=${apiKey}`)
  
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=covid&from=2022-04-01&to=2022-04-30&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <CovidContext.Provider value={{ data }}>
      {props.children}
    </CovidContext.Provider>
  );

};

