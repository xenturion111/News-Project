import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from "../../components/navBar/index"
import { useSelector, useDispatch } from 'react-redux'
import { fetchNewsCovid } from '../../store/actions'
import Buttons from "../../components/button/index"


const Covid = () => {
  const dispatch = useDispatch();
  const { newsCovid, isLoading } = useSelector((state) => state);

  useEffect(() => {
    dispatch((fetchNewsCovid()));
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
            {newsCovid.map((data) => {
              return (
                <>
                  <div className="news" key={data.title}>
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

export default Covid;