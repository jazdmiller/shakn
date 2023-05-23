import React from "react";
import Drink1 from "../assets/drink-img-1.jpg";

function RecipeDetail() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col mt-5 mx-3">
            <a href="#">Back</a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-md-6 order-md-last">
            <div>
              <img src={Drink1} className="recipe-card" alt="" />
            </div>
          </div>
          <div className="mt-5 col-12 col-md-6 order-md-first">
            <div className="row">Tequila Sunrise</div>
            <div className="row">Tequila</div>
            <div className="row d-none d-md-flex">
              <button>Save</button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-6">
            <div className="row">Ingredients</div>
            <div className="row"></div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">Instructions</div>
            <div className="row"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
