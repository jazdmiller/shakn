import React, { useState } from "react";
import CategoryLabel from "./CategoryLabel";
import { useNavigate, Link } from "react-router-dom";

function BrowseHome() {
  const categories = [
    "Tequila",
    "Vodka",
    "Rum",
    "Whiskey",
    "Gin",
    "Wine",
  ];

  const navigate= useNavigate()

  const handleClick = (category) => {
    navigate(`/results/${category}`)
  }

  return (
    <div>
      <div className="pt-5 container">
        <div className="row mx-2 justify-content-space-between">
          <div className="col home-label-text">Browse</div>
          
        </div>
        <div className="row mx-2">
          <div className="home-hr my-3"></div>
        </div>
        <div className="row mx-2 mt-2">
          {categories.map((category) => (
            
            <div className=" my-2 col-6 col-md-4 col-lg-3 ">
              <Link to={`/results/${category}`} key={category}>
            <CategoryLabel category={category} />
            </Link>
            </div>
          ))}
          <div className="my-2 col-12 col-lg-6" >
            <Link to={'/recipe/random'}>
            <CategoryLabel id="random-btn" category='Random'  />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseHome;
