import React, { useState } from 'react'
import './index.css'

async function SearchNews(q) {
    // const apiKey = "7ac509953f2b474181234c50d273d957";
    q = encodeURIComponent(q);
        const response = await fetch (`https://newsapi.org/v2/everything?q=${q}&apiKey=08f4f778371a46f49202ea1f7bda2d74`)
            const body = await response.json();
            return body.value;
}

function Search(q) {
    const [query, setQuery] = useState('technology');
    const [list, setList] = useState();
    q = encodeURIComponent(q);
  // const request1 = axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`);
  // const request2 =  axios.get(`https://newsapi.org/v2/everything?q=apple&from=2022-04-20&to=2022-04-20&sortBy=popularity&apiKey=${apiKey}`)


  const search = (e) => {
      e.preventDefault();
      SearchNews(query).then(setList)
  }

  return (
    <div>
       <form onSubmit={search}>
        <input
          autoFocus
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      {!list
        ? null
        : list.length === 0
          ? <p><i>No results</i></p>
          : <div className="allNews">
            {list.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </div>
      }
    </div>
  )
}


function Item({ item }) {
    return (
        <div className="news">
            <h1 className="newsTitle">{item.title}</h1>
            <img className="newsImage" src={item.urlToImage} />
            <p className="newsDesc">{item.description}</p>
            <span className="newsAuthor">{item.author}</span> <br />
            <span className="newsPublished">{item.publishedAt}</span>
            <span className="newsSource">{item.source.name}</span>
            <div className="button">
                <a href={item.url} target="_blank" style={{textDecoration: 'none'}}>
                <Buttons id="btn-read" text='READ'/>
                </a>
                <Buttons id="btn-save" text='SAVE' />
                </div>
        </div>
    )
}

export default Search