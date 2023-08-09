import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SearchContext from './SearchContext'

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const { setSearchResults, setSearchInput } = useContext(SearchContext)
  const navigate = useNavigate()

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
}

const handleSearchSubmit = async (e) => {
  e.preventDefault();
  try{
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`)
    setSearchResults(response.data.drinks);
    setSearchInput(searchQuery);
    setSearchQuery('')
    navigate('/results');
  } catch(error) {
    console.error(`Error fetching search results: ${error}`)
  }
}
  return (
    <div className='p-0 '>
      <form onSubmit={handleSearchSubmit}>
        <input className= "search-input" type="text" placeholder='Search cocktail recipes' value={searchQuery} onChange={handleSearchChange}></input>
      </form>
    </div>
  )
}

export default SearchBar