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
import AnimatedText from '../components/AnimatedText'

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
    const container = {
      hidden: {opacity: 0},
      visible: (i = 1) => ({
          opacity: 1, 
          transition: {staggerChildren: 0.12, delayChildren: 0.04 * i }
      })
  }

  const child = {
      visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
              type: "spring",
              damping: 12,
              stiffness: 100
          }
      },
      hidden: {
          opacity: 0,
          y: 120,
          x: 20,
          transition: {
              type: "spring",
              damping: 12,
              stiffness: 100
          }

      }
  }

  const searchBar = {
    hidden: {
        opacity: 0,
        y: -20,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 100
        }
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 100,
            delay: .3
        }
    }
  }

  const image = {
    hidden: {
        opacity: 0,
        x: -120
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "fadeIn",
            duration: .7,
        }
    }
  }
  return (
    <div>
        {/* ***** HERO CONTAINER ****** */}
        <div className='container-fluid home-container' >
            <div className='row test home-col'>
                <motion.div variants={container}className='order-last order-md-first hero-text-col col-sm-12 col-md-8 test-col'>
                  <AnimatedText text="Sip, Savor, and Discover: Your Mixology Adventure Awaits"/>
                  {/* <motion.div variants={child}><AnimatedText className="row" text="Sip, Savor, and" /></motion.div>
                  <motion.div variants={child}><AnimatedText className="row" text="Discover" /></motion.div> */}
                    {/* <motion.span 
                    initial={{x: -1000}}
                    animate={{x: 0}}
                    transition={{
                      duration: "1"
                    }}
                    className='row hero-text mt-3'>
                       
                            Sip, Savor, and<p className='p-0 m-0 discover-text'>Discover:</p>Your Mixology<br /> Adventure Awaits
                    </motion.span> */}
                    <div className='row pt-md-5 pt-3'>
                      <div className='col-12 p-0 text-center text-md-start'>
                      <motion.div variants={searchBar} initial="hidden" animate="visible"><SearchBar /></motion.div>
                      </div>
                    </div>
                </motion.div>
                <motion.div variants={image} initial="hidden" animate="visible" className='order-md-last hero-img-col order-first col-sm-12 col-md-4 test-col'>
                    <img src={HeroImg} alt='drink graphic' className='pt-5 hero-img'/>
                </motion.div>
            </div>
        </div>

        {/* ******  BROWSE SECTION **********/}
        <BrowseHome />
        <Featured />
        <BlogHome />
        

    </div>
  )
}
