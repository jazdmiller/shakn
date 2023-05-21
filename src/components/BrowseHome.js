import React, { useState } from "react";
import CategoryLabel from "./CategoryLabel";

function BrowseHome() {
  const categories = [
    "Tequila",
    "Vodka",
    "Rum",
    "Whiskey",
    "Gin",
    "Wine",
  ];
  return (
    <div>
      <div className="pt-5 container">
        <div className="row mx-2 justify-content-space-between">
          <div className="col home-label-text">Browse</div>
          <div className="col text-end home-label-text">Filter</div>
        </div>
        <div className="row mx-2">
          <hr className="home-hr mt-2" />
        </div>
        <div className="row mx-2 mt-2">
          {categories.map((category) => (
            <div className="col-6 col-md-4 col-lg-3 ">
            <CategoryLabel key={category} category={category}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseHome;
