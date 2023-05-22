import React from "react";
import RecipeCard from "./RecipeCard";

function Featured() {
  return (
    <div>
      <div className="pt-5 container">
        <div className="row mx-2">
          <div className="col home-label-text">Featured</div>
        </div>
        <div className="row mx-2">
          <hr className="home-hr mt-2" />
        </div>
        <div className="col">
            <RecipeCard />
        </div>
      </div>
    </div>
  );
}

export default Featured;
