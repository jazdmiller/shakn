import React, { useEffect, useState }from 'react'
import HeroImg from '../assets/hero-img.png'
import BrowseHome from '../components/BrowseHome'
import FavoritesHome from '../components/FavoritesHome'
import Featured from '../components/Featured'
import axios from 'axios'

export default function Home() {
    const [searchInput, setSearchInput] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        searchCocktails();
    }

    const searchCocktails = async () => {
        try {
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
            setSearchResults(res.data.drinks)
            
        }
        catch (error) {
            console.error(`Error fetching results: ${error}`)
        }
    }

    useEffect(() => {
        if(searchInput){
            searchCocktails()
        }
    }, [searchInput])

  return (
    <div>
        {/* ***** HERO CONTAINER ****** */}
        <div className='container-fluid home-container' >
            <div className='row test home-col'>
                <div className='order-last order-md-first hero-text-col col-sm-12 col-md-6 test-col'>
                    <div className='row hero-text mt-3'>
                       
                            Sip, Savor, and<p className='p-0 m-0 discover-text'>Discover:</p>Your Mixology<br /> Adventure Awaits
                    </div>
                    <div className='row pt-5'>
                        <form onSubmit={handleSearchSubmit}>
                        <input type="text" placeholder="Search cocktail recipes" value={searchInput} onChange={handleSearchChange}></input>
                        </form>
                    </div>
                </div>
                <div className='order-md-last hero-img-col order-first col-sm-12 col-md-6 test-col'>
                    <img src={HeroImg} alt='drink graphic' className='pt-5 hero-img'/>
                </div>
            </div>
        </div>

        <div>
                    {searchResults && searchResults.map((drink, index) => (
                       drink &&  <div key={drink.idDrink || index}>
                            <h2>{drink.strDrink}</h2>
                            <img src={drink.strDrinkThumb} alt={drink.strDrink}/>
                        </div>
                    ))}
                </div>
        {/* ******  BROWSE SECTION **********/}
        <BrowseHome />
        <Featured />
        <FavoritesHome />
        

    </div>
  )
}
