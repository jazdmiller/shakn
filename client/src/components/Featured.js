import React, {useState, useEffect} from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { motion } from 'framer-motion'

function Featured() {
  const [drinks, setDrinks] = useState([])

  const container = {
    hidden: {opacity: 0},
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: .02 * i
      }
    })
  }

  const child = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
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

  useEffect(() => {

    const delay = (duration) => new Promise(resolve => setTimeout(resolve, duration));

  const getRandomDrink = async () => {
    await delay(500);
    const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    return response.data.drinks[0]
  }
  Promise.all([getRandomDrink(), getRandomDrink(), getRandomDrink()])
  .then((drinks) => {
    setDrinks(drinks)
  })
}, [])

  return (
    <div>
      <div className=" feature-padding container">
        <div className="row mx-3">
          <div className="col home-label-text">Featured</div>
        </div>
        <div className="row my-3">
        </div>
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{once: true}} className="row mx-2 my-3">
          {drinks.map((drink, index) => (
        <motion.div variants={child} key={index} className="col-12 col-md-6 col-lg-4">
            <RecipeCard  title={drink.strDrink} description={drink.strInstructions} image={drink.strDrinkThumb} link={drink.idDrink}/>

        </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Featured;
