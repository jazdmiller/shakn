import React, {useState, useEffect} from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

function Featured() {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
  const getRandomDrink = async () => {
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
        <div className="row mx-2 my-3">
          {drinks.map((drink, index) => (
        <div key={index} className="col-6 col-lg-4">
            <RecipeCard  title={drink.strDrink} description={drink.strInstructions} image={drink.strDrinkThumb} link={drink.idDrink}/>

        </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
