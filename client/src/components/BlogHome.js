import Reac, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import axios from 'axios'
import { Link } from 'react-router-dom'


function BlogHome() {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  function fetchArticles() {
    axios.get('http://localhost:1337/api/articles?populate=*&_limit=2')
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
        <div className="feature-padding container mb-5">
        <div className="row mx-3 blog-home-label">
          <div className="col-6 home-label-text">On The Blog</div>
          <Link to="/blog" className="col-6 text-end view-article-text">View All Articles</Link>
        </div>
        <div className="row my-3">
        </div>
        <div className="row mx-3">
          {loading ?<p>Loading...</p> : 
          articles.map((article, index) => (
           
              <div class="col-6">
            <BlogCard key={index} article={article}/>
              </div>
           
          ))
          }
        </div>
       
      </div>
    </div>
  )
}

export default BlogHome