import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "7ac509953f2b474181234c50d273d957";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=bitcoin&from=2022-04-19&to=2022-04-19&sortBy=popularity&&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};