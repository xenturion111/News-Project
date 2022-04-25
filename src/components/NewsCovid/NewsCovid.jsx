import React, { useContext } from "react";
import { CovidContext } from "../../config/CovidContext";
import CovidArticle from "./CovidArticle";

function NewsCovid(props) {
  const { data } = useContext(CovidContext);
  console.log(data);

  return (
    <div>
      <div className="allNews">
        {data
          ? data.articles.map((news) => (
              <CovidArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default NewsCovid;