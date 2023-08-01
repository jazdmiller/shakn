import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Blog() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    function fetchArticles(){
        axios.get('http://localhost:1337/api/articles?populate=*')
        .then(response => {
            console.log(response.data.data)
            setArticles(response.data.data);
            setLoading(false)
        })
        .catch(error => {
            console.error('Error fetching articles', error);
        });
    }

    useEffect(() => {
        fetchArticles()
    }, [])


  return (
    <div>
        <div class="home-bg-color">
        <div class="container">
            <h1 class="text-center my-5 blog-header">Shakn Blog</h1>
        {loading ? <p>Loading...</p> :
            articles.map((article, index) => (
            <div key={index} class="card card-border w-75 mx-auto bg-dark text-white">
                <img class="card-img blog-card-img" src={`http://localhost:1337${article.attributes.image.data.attributes.url}`} alt={article.attributes.title}></img>
                <div class="card-img-overlay p-4">
                    <h5 className="blog-card-title">{article.attributes.title}</h5>
                    <p class="card-text blog-card-text w-75">{article.attributes.content}</p>
                    <Link to={`/article/${article.id}`}>Read More</Link>
                </div>
                {/* <div class="card-body">
                    <h5 class="card-title">{article.attributes.title}</h5>
                    <div class="row">
                        <div class="col-10">
                            <p class="card-text">{article.attributes.content}</p>
                        </div>
                        <div class="col-2">
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
                <img class="card-img-bottom" src={`http://localhost:1337${article.attributes.image.data.attributes.url}`} alt={article.title} /> */}
            </div>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Blog