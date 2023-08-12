import React, { useState } from "react";
import CategoryLabel from "./CategoryLabel";
import { useNavigate, Link } from "react-router-dom";

export const categories = [
  "Tequila",
  "Vodka",
  "Rum",
  "Whiskey",
  "Gin",
  "Wine",
  "Non-Alcoholic"
];

function BrowseHome() {

  const navigate= useNavigate()

  const handleClick = () => {
    navigate(`/recipe/random`)
  }

  return (
    <div>
      <div className="pt-5 container">
        <div className="row mx-3 justify-content-space-between blog-home-label">
          <div className="col-6 home-label-text">Browse</div>
            <Link to="/results/all" className="col-6 text-end view-article-text">Browse All</Link>
            </div>
        <div className="row my-3">
        </div>
        <div className="row mx-2 mt-2">
          {categories.map((category) => (
            
            <div className=" my-2 col-6 col-md-4 col-lg-3 ">
              <Link to={`/results/${category}`} key={category}>
            <CategoryLabel category={category} />
            </Link>
            </div>
          ))}
          <div className="my-2 col-6 col-md-4 col-lg-3" >
            <Link to={'/recipe/random'}>
            <CategoryLabel id="random-btn" category='Random Drink' onClick={handleClick} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseHome;
