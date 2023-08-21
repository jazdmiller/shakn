import React, { useState } from "react";
import CategoryLabel from "./CategoryLabel";
import { useNavigate, Link } from "react-router-dom";
import { motion } from 'framer-motion'

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

  const container ={
    hidden: {opacity: 0},
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.02 * i
      }
    })
  }
  const staggerLabels = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        type:"spring",
        damping: 20,
        stiffness: 100
      }
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  }

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
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{once : true}}  className="row mx-2 mt-2">
          {categories.map((category) => (
            
            <motion.div variants={staggerLabels} className=" my-2 col-6 col-md-4 col-lg-3 ">
              <Link to={`/results/${category}`} key={category}>
            <CategoryLabel category={category} />
            </Link>
            </motion.div>
          ))}
          <motion.div variants={staggerLabels} className="my-2 col-6 col-md-4 col-lg-3" >
            <Link to={'/recipe/random'}>
            <CategoryLabel id="random-btn" category='Random Drink' onClick={handleClick} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default BrowseHome;
