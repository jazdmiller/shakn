import React from 'react'
import { Link } from 'react-router-dom'


export default function BlogCard({ article }) {
  const { title, content } = article.attributes
  const image = article.attributes.image?.data?.attributes?.url
  return (
    <div>
        <div class="card blog-card">
          <img src={`http://localhost:1337${image}`} alt={title}></img>
          <div class="card-body">
            <div>
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{content}</p>
              <Link to={`/article/${article.id}`} >Read Article</Link>
            </div>

          </div>
        </div>
    </div>
  )
}
