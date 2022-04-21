import React from 'react'
import './App.css'
import Navbar from './components/navBar/index'
import axios from 'axios'
import {NewsContextProvider} from "./NewsContext"
import News from "./components/News/News"

function App() {
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
        <NewsContextProvider>
            <News />
        </NewsContextProvider>
      </section>
    </div>
  )
}

export default App
