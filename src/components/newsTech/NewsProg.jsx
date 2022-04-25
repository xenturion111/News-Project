import React, { useContext } from "react";
import { ProgrammingContext } from "../../config/ProgrammingContext";
import NewsArticleProg from "./newsArticleProg";

function News(props) {
  const { data } = useContext(ProgrammingContext);
  console.log(data);

  return (
    <div>
      <div className="allNews">
        {data
          ? data.articles.map((news) => (
              <NewsArticleProg data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;