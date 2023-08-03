import Reac, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import axios from 'axios'


function BlogHome() {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  function fetchArticles() {
    axios.get('http://localhost:1337/api/articles?populate=*&_limit=3')
    .then(response => {
      setArticles(response.data.data)
      setLoading(false)
    })
    .catch(error => {
      console.error('Error fetching articles', error)
    })
  }

  useEffect(() => {
    fetchArticles()
}, [])
  return (
    <div>
        <div className=" feature-padding container">
        <div className="row mx-3">
          <div className="col home-label-text">On The Blog</div>
        </div>
        <div className="row my-3">
        </div>
        <div className="row mx-3">
          {loading ?<p>Loading...</p> : 
          articles.map((article, index) => (
            <div class="row my-4">
              <div class="col">
            <BlogCard key={index} article={article}/>
              </div>
            </div>
          ))
          }
        </div>
       
      </div>
    </div>
  )
}

export default BlogHome