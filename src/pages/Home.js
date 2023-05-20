import React from 'react'
import HeroImg from '../assets/hero-img.png'
import BrowseHome from '../components/BrowseHome'


export default function Home() {
  return (
    <div>
        {/* ***** HERO CONTAINER ****** */}
        <div className='container-fluid home-container' >
            <div className='row hero-text-row test home-col'>
                <div className='order-last order-md-first col-sm-12 col-md-6 p-5 text-left test-col'>
                    <div className='pt-4 row w-100 hero-text'>
                       
                            Sip, Savor, and<p className='p-0 m-0 discover-text'>Discover:</p>Your Mixology Adventure Awaits
                    </div>
                    <div className='row pt-5'>
                        <input type="text" placeholder="Search cocktail recipes"></input>
                    </div>
                </div>
                <div className='order-md-last text-center order-first col-sm-12 col-md-6 test-col'>
                    <img src={HeroImg} alt='drink graphic' className='pt-5 hero-img'/>
                </div>
            </div>
        </div>

        {/* ******  BROWSE SECTION **********/}
        <BrowseHome />

    </div>
  )
}
