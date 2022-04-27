import React, { useEffect, useState } from 'react'
import './index.css'
// import {ProgrammingContextProvider} from "../../config/ProgrammingContext"
// import News from "../../components/newsTech/NewsProg"
import Navbar from "../../components/navBar/index"
import { useSelector, useDispatch } from 'react-redux'
import { fetchNewsProg } from '../../store/actions'
import Buttons from "../../components/button/index"


const Programming = () => {
  const dispatch = useDispatch();
  const { newsProg, isLoading } = useSelector((state) => state);

  useEffect(() => {
    dispatch((fetchNewsProg()));
  }, []);

  return (
    <div className="Programming">
      <div className="headerProgramming">
        <Navbar />
      </div>
      <section>
        {isLoading ? (
          <h1>LOADING...</h1>
        ) : (
          <div className="allNews">
            {newsProg.map((data) => {
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

export default Programming;