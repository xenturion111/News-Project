import React from 'react'
import {NewsContextProvider} from "../../config/NewsContext"
import News from "../../components/News/News"
import Navbar from "../../components/navBar/index"
import './index.css'

const Programming = () => {
  return (
    <div className="Programming">
      <div className="headerProgramming">
        <Navbar />
      </div>
      <section className="Content">
        <NewsContextProvider>
          <News />
        </NewsContextProvider>
      </section>
         
    </div>
  )
}

export default Programming