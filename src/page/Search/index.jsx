import React, { useEffect, useState } from 'react'
import './index.css'
// import {ProgrammingContextProvider} from "../../config/ProgrammingContext"
// import News from "../../components/newsTech/NewsProg"
import Navbar from "../../components/navBar/index"
import { useSelector, useDispatch } from 'react-redux'
import { fetchNewsSearch } from '../../store/actions'
import Buttons from "../../components/button/index"


const Search = () => {
  const dispatch = useDispatch();
  const searchText = "economy"
  const { newsSearch, isLoading } = useSelector((state) => state);

  useEffect(() => {
    dispatch((fetchNewsSearch(searchText)));
  }, []);

  return (
    <div className="Search">
      <div className="headerSearch">
        <Navbar />
      </div>
      <section>
      <p>{JSON.stringify(isLoading)}</p>
        {isLoading ? (
          <h1>LOADING...</h1>
        ) : (
          <div className="allNews">
            {newsSearch.map((data) => {
              return (
                <>
                  <div className="news" key={data.url}>
                    <h1 className="newsTitle">{data.title}</h1>
                    <img className="newsImage" src={data.urlToImage} />
                    <p className="newsDesc">{data.description}</p>
                    <span className="newsAuthor">{data.author}</span> <br />
                    <span className="newsPublished">{data.publishedAt}</span>
                    <span className="newsSource">{data.source.name}</span>
                    <div className="button">
                      <a href={data.url} target="_blank" style={{ textDecoration: 'none' }}>
                        <Buttons id="btn-read" text='READ' />
                      </a>
                      <Buttons id="btn-save" text='SAVE' />
                    </div>
                  </div>

                </>
              )
            })}
          </div>
        )}
      </section>

    </div>
  )
}

export default Search;