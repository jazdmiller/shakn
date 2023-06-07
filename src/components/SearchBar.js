import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SearchContext from './SearchContext'

function SearchBar() {
  const [searchInput, setSearchInput] = useState('')
  const { setSearchResults } = useContext(SearchContext)
  const navigate = useNavigate()

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value)
}

const handleSearchSubmit = async (e) => {
  e.preventDefault();
  try{
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
    setSearchResults(response.data.drinks);
    navigate('/results');
  } catch(error) {
    console.error(`Error fetching search results: ${error}`)
  }
}
  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" placeholder='Search cocktail recipes' value={searchInput} onChange={handleSearchChange}></input>
      </form>
    </div>
  )
}

export default SearchBar