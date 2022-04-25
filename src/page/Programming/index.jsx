import React from 'react'
import {ProgrammingContextProvider} from "../../config/ProgrammingContext"
import News from "../../components/newsTech/NewsProg"
import Navbar from "../../components/navBar/index"
import './index.css'

const Programming = () => {
  return (
    <div className="Programming">
      <div className="headerProgramming">
        <Navbar />
      </div>
      <section className="Content">
        <ProgrammingContextProvider>
          <News />
        </ProgrammingContextProvider>
      </section>
         
    </div>
  )
}

export default Programming