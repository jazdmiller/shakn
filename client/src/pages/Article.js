import React, { useEffect, useState }from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'


function Article() {
    const { id } = useParams()
    const [article, setArticle] = useState(null)

    function fetchArticle(){
        axios.get(`http://localhost:1337/api/articles/${id}?populate=*`)
        .then(response => {
            setArticle(response.data.data)
        })
        .catch(error => {
            console.error('Error fetching article', error)
        })
    }

    useEffect(() => {
        fetchArticle()
    }, [id])

    if (!article) {
        return <div>Loading...</div>
    }


  return (
    <div>
        <div class="container mt-5">
        <div class="article-back-btn row w-100 mb-5">
            <div class="col-5">
            <Link>
            <i class="fa-solid fa-arrow-left p-3"></i>
            Back To Articles
            </Link>
            </div>
        </div>
        <div class="article-title row text-center mt-4 ">
        <h2>{article.attributes.title}</h2>
        </div>
        <div class="sub-title row ">
            <div class="d-flex justify-content-center">
                <p class="m-3 mt-4">Published: 7/31/23</p>
                <button class="m-3 mt-4"><i class="fa-solid fa-plus px-2"></i>Save Article</button>
                
            </div>
        </div>
        <div class="horizontal-line-container row justify-content-center">
            <div class="horizontal-line"></div>
        </div>
        <div class="article-img-container">
        <img src={`http://localhost:1337${article.attributes.image.data.attributes.url}`} alt={article.attributes.title} />
        </div>
        <p class="content">{article.attributes.content}</p>
        </div>
    </div>
  )
}

export default Article