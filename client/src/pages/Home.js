import React, { useEffect, useState }from 'react'
import HeroImg from '../assets/hero-img.png'
import BrowseHome from '../components/BrowseHome'
import BlogHome from '../components/BlogHome'
import Featured from '../components/Featured'
import SearchContext from '../components/SearchContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import {motion} from 'framer-motion'

export default function Home() {
    


    

    // const handleSearchSubmit = async (e) => {
    //     e.preventDefault();
    //     searchCocktails();
    // }

    // const searchCocktails = async () => {
    //     try {
    //         const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
    //         setSearchResults(res.data.drinks)
            
    //     }
    //     catch (error) {
    //         console.error(`Error fetching results: ${error}`)
    //     }
    // }

    // useEffect(() => {
    //     if(searchInput){
    //         searchCocktails()
    //     }
    // }, [searchInput])

  return (
    <div>
        {/* ***** HERO CONTAINER ****** */}
        <div className='container-fluid home-container' >
            <div className='row test home-col'>
                <div className='order-last order-md-first hero-text-col col-sm-12 col-md-8 test-col'>
                    <motion.div 
                    initial={{x: -1000}}
                    animate={{x: 0}}
                    transition={{
                      duration: "1"
                    }}
                    className='row hero-text mt-3'>
                       
                            Sip, Savor, and<p className='p-0 m-0 discover-text'>Discover:</p>Your Mixology<br /> Adventure Awaits
                    </motion.div>
                    <div className='row pt-md-5 pt-3'>
                      <div className='col-12 p-0 text-center text-md-start'>
                      <SearchBar />
                      </div>
                    </div>
                </div>
                <div className='order-md-last hero-img-col order-first col-sm-12 col-md-4 test-col'>
                    <img src={HeroImg} alt='drink graphic' className='pt-5 hero-img'/>
                </div>
            </div>
        </div>

        {/* ******  BROWSE SECTION **********/}
        <BrowseHome />
        <Featured />
        <BlogHome />
        

    </div>
  )
}
