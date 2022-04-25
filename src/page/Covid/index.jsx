import React from 'react'
import {CovidContextProvider} from "../../config/CovidContext"
import NewsCovid from "../../components/NewsCovid/NewsCovid"
import Navbar from "../../components/navBar/index"
import './index.css'

const Covid = () => {
  return (
    <div className="Programming">
      <div className="headerProgramming">
        <Navbar />
      </div>
      <section className="Content">
        <CovidContextProvider>
          <NewsCovid />
        </CovidContextProvider>
      </section>
         
    </div>
  )
}

export default Covid