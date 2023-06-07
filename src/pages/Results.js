import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import SearchContext from "../components/SearchContext";

function Results() {
  const { searchResults } = useContext(SearchContext);

  return (
    <div>
        <SearchBar />
      {searchResults &&
        searchResults.map(
          (drink, index) =>
            drink && (
              <div key={drink.idDrink || index}>
                <h2>{drink.strDrink}</h2>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              </div>
            )
        )}
    </div>
  );
}

export default Results;
