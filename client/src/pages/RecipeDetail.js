import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Drink1 from "../assets/drink-img-1.jpg";

function RecipeDetail() {

  const [cocktail, setCocktail] = useState(null)
  const [showIngredientDropdown, setShowIngredientDropdown] = useState(false);
  const [showInstructionsDropdown, setShowInstructionsDropdown] = useState(false);
  const { id } = useParams()
  const navigate = useNavigate()
 const location = useLocation()
  const isRandom = location.pathname === "/recipe/random"
  const isNonAlcoholic = location.pathname === "/recipe/nonalcoholic"

  const getIngredients = (cocktail) => {
    let ingredients = []

    for(let i=1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`]
      const measure = cocktail[`strMeasure${i}`]

      if(ingredient && ingredient !== null) {
        ingredients.push({
          ingredient,
          measure: measure ? measure : '',
        })
      }
    }

    return ingredients;
  }

    const fetchRandomCocktail = async () => {
      try{
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        console.log("response data for random cocktail:", response.data)
        const randomDetails = response.data.drinks[0]
        const ingredients = getIngredients(randomDetails)
        randomDetails.ingredients = ingredients
        setCocktail(randomDetails)
    } catch(error){
      console.error(`Error fetching random cocktail: ${error}`)
    }
  }
  
  const fetchCocktail = async () => {
    try{
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      const cocktailDetails = response.data.drinks[0]
      const ingredients = getIngredients(cocktailDetails)
      cocktailDetails.ingredients = ingredients;
      setCocktail(cocktailDetails)
    } catch(error){
      console.error(`Error fetching cocktail details: ${error}`)
    }
  }

  // const fetchNonAlcoholic = async () => {
  //   try{
  //     const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
  //     const nonAlcoholicDetails = response.data.drinks[0]
  //     const ingredients = getIngredients(nonAlcoholicDetails)
  //     nonAlcoholicDetails.ingredients = ingredients
  //     setCocktail(nonAlcoholicDetails)
  //   }
  //   catch(error){
  //     console.error(`Error fetching non-alcoholic cocktail details: ${error}`)
  //   }
  // }

  useEffect(() => {
    if(isRandom) {
      fetchRandomCocktail()
    }
    // else if(isNonAlcoholic){
    //   fetchNonAlcoholic()
    // }
    else if(id) {
      fetchCocktail()
    }
  }, [id, isRandom])

  function handleIngredientDropdown() {
    setShowIngredientDropdown(!showIngredientDropdown)
  }
  function handleInstructionsDropdown() {
    setShowInstructionsDropdown(!showInstructionsDropdown)
  }

  if(!cocktail) return null;
  return (
    <div>
      <div className="container recipe-container">
        <div className="row">
          <div className="recipe-back col mt-5 mx-3">
          <i className=" fa fa-light fa-arrow-left mx-2 " onClick={() => navigate(-1)}></i>
            <a href="#"onClick={(e) => {e.preventDefault(); navigate(-1)}}>Back</a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-md-6 order-md-last">
            <div>
              <img src={cocktail.strDrinkThumb} className="recipe-card" alt="" />
            </div>
          </div>
          <div className="mt-4 col-12 col-md-6 order-md-first">
            <div className="row mx-4 w-50 recipe-title">{cocktail.strDrink}</div>
            <div className="row mx-4 mt-2">
              <span className="badge rounded-pill bg-secondary ing-badge w-25">{cocktail.strIngredient1}</span>
            </div>
            <div className="row d-none d-md-flex recipe-save-btn w-50 mx-4 mt-5">
              <button>Save</button>
            </div>
          </div>
        </div>
        <div className="row details-row d-none d-md-flex">
          <div className="col-6">
            <div onClick={handleIngredientDropdown} className="row d-flex">
              <span className="dd-label text-left mx-4">Ingredients</span>
            <div className="row">
                <ul className="dropdown text-left mx-4 pt-4">
                  {cocktail.ingredients.map((item, index) => (
                    <li key={index}>{`${item.ingredient} - ${item.measure}`}</li>
                  ))}
                </ul>
            </div>
            </div>
          </div>
          <div className="col-6 ">
          <div onClick={handleInstructionsDropdown}className="row d-flex">
              <span className="dd-label">Instructions</span>
            <div className="row">
              <p className="dropdown text-left pt-4">
                {cocktail.strInstructions}
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
              <ul className="dropdown text-left mx-4 pt-4">
              {cocktail.ingredients.map((item, index) => (
                <li key={index}>{`${item.ingredient} - ${item.measure}`}</li>
              ))}
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
                {cocktail.strInstructions}
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
