import React, {useEffect, useState} from 'react'
import './index.css'
// import {NewsContextProvider} from "../../config/NewsContext"
// import News from "../../components/News/News"
import Navbar from "../../components/navBar/index"
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews } from '../../store/actions'
import Buttons from "../../components/button/index"

const Home = () => {
  const dispatch = useDispatch();
  const {news, isLoading} = useSelector((state) => state);
  const onSave = () => {
    dispatch(saveData());
  }
  useEffect(() => {
    dispatch((fetchNews()));
  }, []);
  return (
    <div className="App">
      <section className="Header">
      <Navbar />
        <div className="Iam">
                <p>New-News</p>
                <b>
                  <div className="innerIam">
                    Tempat<br /> 
                    Berita terkini<br />
                    Berita terpercaya<br />
                    Berita Terbaik<br />
                    Hanya di NEW NEWS
                    </div>
                </b>
              </div>
      </section>
        <section>
         
          {isLoading ? (
            <h1>LOADING...</h1>
          ): (
            <div className="allNews">
            {news.map((data) => {
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
                    <a href={data.url} target="_blank" style={{textDecoration: 'none'}}>
                      <Buttons id="btn-read" text='READ'/>
                    </a>
                      <Buttons onClick={onSave} id="btn-save" text='SAVE' />
                    </div>
                </div>
                </>
              )
            })}
            </div>
          )}
          {/* <NewsContextProvider>
              <News />
          </NewsContextProvider> */}
        </section>
    </div>
  )
}

export default Home