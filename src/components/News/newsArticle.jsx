import React from "react";
import Buttons from "../button/index";

function NewsArticle({ data }) {
  const openRead = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if(newWindow) newWindow.opener = null;
  }

  return (
    <div className="news">
      <h1 className="newsTitle">{data.title}</h1>
      <img className="newsImage" src={data.urlToImage} />
      <p className="newsDesc">{data.description}</p>
      <span className="newsAuthor">{data.author}</span> <br />
      <span className="newsPublished">{data.publishedAt}</span>
      <span className="newsSource">{data.source.name}</span>
        <div className="button">
          <Buttons id="btn-read" text='READ'
            onClick={() => openRead(data.url)}
          />
          <Buttons id="btn-save" text='SAVE' />
        </div>
    </div>
  );
}

export default NewsArticle;