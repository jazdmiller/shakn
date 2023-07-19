import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
        
        {loading ? <p>Loading...</p> :
            articles.map((article, index) => (
            <div key={index}>
                <h2>{article.attributes.title}</h2>
                <img src={`http://localhost:1337${article.attributes.image.data.attributes.url}`} alt={article.title} />
                <p>{article.attributes.content}</p>
            </div>
        ))}
    </div>
  )
}

export default Blog