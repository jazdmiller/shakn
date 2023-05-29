import React, { useState } from "react";
import Drink1 from "../assets/drink-img-1.jpg";

function RecipeDetail() {

  const [showIngredientDropdown, setShowIngredientDropdown] = useState(false);
  const [showInstructionsDropdown, setShowInstructionsDropdown] = useState(false);

  function handleIngredientDropdown() {
    setShowIngredientDropdown(!showIngredientDropdown)
  }
  function handleInstructionsDropdown() {
    setShowInstructionsDropdown(!showInstructionsDropdown)
  }
  return (
    <div>
      <div className="container recipe-container">
        <div className="row">
          <div className="recipe-back col mt-5 mx-3">
          <i class=" fa fa-light fa-arrow-left mx-2 "></i>
            <a href="#">Back</a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-md-6 order-md-last">
            <div>
              <img src={Drink1} className="recipe-card" alt="" />
            </div>
          </div>
          <div className="mt-4 col-12 col-md-6 order-md-first">
            <div className="row mx-4 w-50 recipe-title">Tequila Sunrise</div>
            <div className="row mx-4 mt-2">
              <span className="badge rounded-pill bg-secondary ing-badge w-25">Tequila</span>
            </div>
            <div className="row d-none d-md-flex recipe-save-btn w-50 mx-4 mt-5">
              <button>Save</button>
            </div>
          </div>
        </div>
        <div className="row details-row d-none d-md-flex">
          <div className="col-6">
            <div onClick={handleIngredientDropdown}className="row d-flex">
              <span className="dd-label text-left mx-4">Ingredients</span>
            <div className="row">
              <ul className="dropdown text-left mx-4 pt-4">
                <li>Ingredient</li>
                <li>Ingredient</li>
                <li>Ingredient</li>
              </ul>
            </div>
            </div>
          </div>
          <div className="col-6 ">
          <div onClick={handleInstructionsDropdown}className="row d-flex">
              <span className="dd-label">Instructions</span>
            <div className="row">
              <p className="dropdown text-left pt-4">
                These are the instructions for preparing your new favorite drink
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className="row details-row d-md-none">
          <div className="col-12">
            <div onClick={handleIngredientDropdown}className="row d-flex">
            <div className="col-6 d-flex justify-content-center">
              <span className="dd-label">Ingredients</span>
            </div>
            <div className="dropdown-wrapper col-5 d-flex align-items-center justify-content-end px-3">
            <i class="fa fa-light fa-caret-down fa-xl"></i>
            </div>
            <div className="row">
            {showIngredientDropdown && (
              <ul className="dropdown text-center pt-4">
                <li>Ingredient</li>
                <li>Ingredient</li>
                <li>Ingredient</li>
              </ul>
            )}
            </div>
            </div>
          <hr className="home-hr mt-2" />
          </div>
          <div className="col-12 ">
          <div onClick={handleInstructionsDropdown}className="row d-flex">
            <div className="col-6 d-flex justify-content-center">
              <span className="dd-label">Instructions</span>
            </div>
            <div className="dropdown-wrapper col-5 d-flex align-items-center justify-content-end px-3">
            <i class="fa fa-light fa-caret-down fa-xl"></i>
            </div>
            <div className="row">
            {showInstructionsDropdown && (
              <p className="dropdown text-center pt-4">
                These are the instructions for preparing your new favorite drink
              </p>
            )}
            </div>
            </div>
          <hr className="home-hr mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
