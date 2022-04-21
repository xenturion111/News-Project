import React from 'react'
import { NewsContextProvider } from './NewsContext';
import ProgrammingNews from './ProgrammingNews'

const Programming = () => {
  return (
    <div>
      <NewsContextProvider>
        <ProgrammingNews />
      </NewsContextProvider>
    </div>
  )
}


export default Programming;