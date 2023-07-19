import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({title, description, image, link}) {
  return (
    <div>
          
        <div class="card">
                <img src={image} class="card-img-top" alt={title} />
                <div class="card-body">
                  <h5 class="card-title">{title}</h5>
                  <p class="card-text">
                    {description}
                  </p>
                  <Link to={`/recipe/${link}`} class="btn btn-primary">
                    View Recipe
                  </Link>
                </div>
              </div>
    </div>
  );
}

export default RecipeCard;
