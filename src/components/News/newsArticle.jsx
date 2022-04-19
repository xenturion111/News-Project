import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="newsTitle">{data.title}</h1>
      <p className="newsDesc">{data.description}</p>
      <span className="newsAuthor">{data.author}</span> <br />
      <span className="newsPublished">{data.publishedAt}</span>
      <span className="newsSource">{data.source.name}</span>
      <span className="newsImage">{data.urlToImage}</span>
    </div>
  );
}

export default NewsArticle;