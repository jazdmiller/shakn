import React from 'react'


export default function BlogCard({ article }) {
  return (
    <div>
        <div class="card blog-card">
          <img src={`http://localhost:1337${article.image}`} alt={article.title}></img>
          <div class="card-body">
            <div>
              <h5 class="card-title">{article.title}</h5>
              <p class="card-text">{article.content}</p>
              <Link to={`/article/${article.id}`} >Read Article</Link>
            </div>

          </div>
        </div>
    </div>
  )
}
