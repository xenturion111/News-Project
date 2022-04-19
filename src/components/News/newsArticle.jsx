import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="newsTitle">{data.title}</h1>
      <img className="newsImage" src={data.urlToImage} />
      <p className="newsDesc">{data.description}</p>
      <span className="newsAuthor">{data.author}</span> <br />
      <span className="newsPublished">{data.publishedAt}</span>
      <span className="newsSource">{data.source.name}</span>
    </div>
  );
}

export default NewsArticle;