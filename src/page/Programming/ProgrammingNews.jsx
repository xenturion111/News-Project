import React, {useContext} from 'react'
import { NewsContext } from './NewsContext'
import NewsArticle from '../../components/News/newsArticle'


const ProgrammingNews = (props) => {
  const { data } = useContext(NewsContext);
  console.log(data);
  return (
    <div>
      <div className="allNews">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  )
}

export default ProgrammingNews;