import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import SearchContext from "../components/SearchContext";
import RecipeCard from "../components/RecipeCard";
import { categories } from "../components/BrowseHome";
import CategoryLabel from "../components/CategoryLabel";

const fetchAllCategories = async () => {
  const { data } = await axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
  );
  return data.drinks.map((drink) => drink.strCategory);
};

const fetchDrinksByCategory = async (category) => {
  const { data } = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
  );
  return data.drinks;
};

const fetchAllDrinks = async () => {
  const categories = await fetchAllCategories();
  const drinksRequests = categories.map((category) =>
    fetchDrinksByCategory(category)
  );
  const drinksArrays = await Promise.all(drinksRequests);
  return [].concat(...drinksArrays);
};

function Results({ value }) {
  const { searchResults, setSearchResults, searchInput } =
    useContext(SearchContext);
  const { category } = useParams();

  useEffect(() => {
    if (category === "all") {
      fetchAllDrinks().then((data) => {
        setSearchResults(data);
      });
    }
    if (category) {
      if (category === "Non-Alcoholic") {
        const fetchNonAlcoholic = async () => {
          try {
            const response = await axios.get(
              "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
            );
            console.log("Response data:", response.data);
            setSearchResults(response.data.drinks);
          } catch (error) {
            console.error(`Error fetching non-alcoholic results: ${error}`);
          }
        };
        fetchNonAlcoholic();
      } else {
        const fetchCategoryResults = async () => {
          try {
            const response = await axios.get(
              `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${category}`
            );
            console.log("Response data:", response.data);
            setSearchResults(response.data.drinks);
          } catch (error) {
            console.error(`Error fetching category results: ${error}`);
          }
        };
        fetchCategoryResults();
      }
    }
  }, [category, setSearchResults]);

  return (
    <div>
      <div className="row mt-5">
        <div className="col text-center ">
          <SearchBar />
        </div>
      </div>

      <div className="d-md-none d-flex row mt-3">
        <div className="col text-center ">
          <button
            type="button"
            class="filter-btn w-50"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
          Filter
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="filter"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="filter">
                    Filter by spirit
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div className="row">
                  {categories.map((category) => (
                <div className="col-6 my-2">
                  <Link to={`/results/${category}`} key={category}  class="close">
                    <CategoryLabel category={category} id="filter-label"  />
                  </Link>
                </div>
              ))}
              <div className="col-12 mt-4">
                <Link to={`/recipe/random`}>
                  <CategoryLabel
                    className="cat-btn"
                    category="Random Drink"
                    id="random-label"
                  />
                </Link>
              </div>
              <div className="col-12 my-3 ">
                <Link to={`/results/all`}>
                  <CategoryLabel
                    className="cat-btn"
                    category="Browse All"
                    id="random-label"
                  />
                </Link>
              </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col text-center ">
          <p>
            Showing results for '
            {category === "nonalcoholic"
              ? "Non-Alcoholic"
              : category
              ? category
              : searchInput}
            '
          </p>
        </div>
      </div>

      <div className="row mx-2 my-2">
        <div className="d-none d-md-flex col-3">
          <div id="filter-col" className="results-col w-100 p-4">
            <div className="row text-center">
              <span className="filter-text">Filter by spirit</span>
            </div>
            <div className="row mt-3">
              {categories.map((category) => (
                <div className="col-6 my-2">
                  <Link to={`/results/${category}`} key={category}>
                    <CategoryLabel category={category} id="filter-label" />
                  </Link>
                </div>
              ))}
              <div className="col-12 mt-4">
                <Link to={`/recipe/random`}>
                  <CategoryLabel
                    className="cat-btn"
                    category="Random Drink"
                    id="random-label"
                  />
                </Link>
              </div>
              <div className="col-12 my-3 ">
                <Link to={`/results/all`}>
                  <CategoryLabel
                    className="cat-btn"
                    category="Browse All"
                    id="random-label"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 col-12 ">
          <div className="results-col w-10 p-2 p-md-4">
            <div className="row">
              {searchResults &&
                searchResults.map((drink, index) => (
                  <div className="my-2 col-6 col-md-4 col-lg-4">
                    <RecipeCard
                      key={index}
                      title={drink.strDrink}
                      description={drink.strInstructions}
                      image={drink.strDrinkThumb}
                      link={drink.idDrink}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
