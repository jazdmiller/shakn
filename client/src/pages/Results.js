import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import SearchContext from "../components/SearchContext";
import RecipeCard from "../components/RecipeCard";

function Results({ value }) {
  const { searchResults, setSearchResults, searchInput } = useContext(SearchContext);
  const { category } = useParams()

  useEffect(() => {

 
    if(category){
  
    const fetchCategoryResults = async () => {
      try{
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${category}`)
        console.log("Response data:", response.data)
        setSearchResults(response.data.drinks)
      } catch (error){
        console.error(`Error fetching category results: ${error}`)
      }

    }
    fetchCategoryResults()
    }
    
  }, [category, setSearchResults])

  
  
  return (
    <div>
        <div className="row my-5">
            <div className="col text-center ">
                <SearchBar />
            </div>
        </div>

        <div className="row my-5">
            <div className="col text-center ">
                <p>Showing results for '{category ? category : searchInput}'</p>
            </div>
        </div>

        <div className="row mx-2 my-2">
      {searchResults &&
        searchResults.map(
          (drink, index) =>
            (
            <div className="my-2 col-6 col-md-4 col-lg-3">
             <RecipeCard 
             key={index}
             title={drink.strDrink}
             description={drink.strInstructions}
             image={drink.strDrinkThumb}
             link={drink.idDrink}
             />
            </div>
            )
        )}
        </div>
    </div>
  );
}

export default Results;
