import React from 'react'
import HeroImg from '../assets/hero-img.png'
import BrowseHome from '../components/BrowseHome'
import Featured from '../components/Featured'


export default function Home() {
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
                        <input type="text" placeholder="Search cocktail recipes"></input>
                    </div>
                </div>
                <div className='order-md-last hero-img-col order-first col-sm-12 col-md-6 test-col'>
                    <img src={HeroImg} alt='drink graphic' className='pt-5 hero-img'/>
                </div>
            </div>
        </div>

        {/* ******  BROWSE SECTION **********/}
        <BrowseHome />
        <Featured />
        

    </div>
  )
}
