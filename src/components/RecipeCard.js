import React from "react";

function RecipeCard({title, description, image, link}) {
  return (
    <div>
      {/* <div className=" pt-2 container">
        <div className="row justify-content-center justify-content-md-between"> */}
          
        <div class="card">
                <img src={image} class="card-img-top" alt={title} />
                <div class="card-body">
                  <h5 class="card-title">{title}</h5>
                  <p class="card-text">
                    {description}
                  </p>
                  <a href={link} class="btn btn-primary">
                    View Recipe
                  </a>
                </div>
              </div>
        {/* </div>
      </div> */}
    
    </div>
  );
}

export default RecipeCard;
