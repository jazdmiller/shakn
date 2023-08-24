import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

function RecipeCard({title, description, image, link}) {
  return (
    <div>
          
        <div style={{ boxShadow: "0 0 10px rgba(0,0,0,0.2)" }} class="card recipe-card">
                <img src={image} class="card-img-top" alt={title} />
                <div class="card-body">
                  <h5 class="card-title">{title}</h5>
                  <p class="card-text">
                    {description}
                  </p>
                  <Link to={`/recipe/${link}`} class="btn">
                    View Recipe
                  </Link>                  
                </div>
              </div>
    </div>
  );
}

export default RecipeCard;
