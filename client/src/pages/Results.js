import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import SearchContext from "../components/SearchContext";
import RecipeCard from "../components/RecipeCard";
import { categories } from "../components/BrowseHome";
import CategoryLabel from "../components/CategoryLabel"

function Results({ value }) {
  const { searchResults, setSearchResults, searchInput } = useContext(SearchContext);
  const { category } = useParams()

  useEffect(() => {

 
    if(category){
      if(category === 'Non-Alcoholic'){

        const fetchNonAlcoholic = async () => {
          try{
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            console.log("Response data:", response.data)
            setSearchResults(response.data.drinks)
          }
          catch(error){
            console.error(`Error fetching non-alcoholic results: ${error}`)
          }
        }
        fetchNonAlcoholic()
      }
      else {

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
      
    }
    
  }, [category, setSearchResults,])


  
  
  return (
    <div>
        <div className="row my-5">
            <div className="col text-center ">
                <SearchBar />
            </div>
        </div>

        <div className="row my-5">
            <div className="col text-center ">
                <p>Showing results for '{category === "nonalcoholic" ? "Non-Alcoholic" : (category ? category : searchInput)}'</p>
            </div>
        </div>

        <div className="row mx-2 my-2">
          <div className="d-none d-md-flex col-3">
            <div className="results-col w-100 p-4">
              <div className="row text-center">
                <span className="filter-text">Filter by spirit</span>
              </div>
              <div className="row">
                {categories.map((category) => (
                  <div className="col-6">
                    <Link to={`/results/${category}`} key={category}>
                      <CategoryLabel category={category} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>
          <div className="col-md-9 col-12 ">
            <div className="results-col w-100 p-4">
            <div className="row">
      {searchResults &&
        searchResults.map(
          (drink, index) =>
            (
            <div className="my-2 col-6 col-md-4 col-lg-4">
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
        </div>
        </div>
    </div>
  );
}

export default Results;
