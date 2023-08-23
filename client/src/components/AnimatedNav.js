import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AnimatedNav() {
  return (
    // <div className='container-fluid w-100 vh-100 d-flex'>
    //     <header className='row w-100 text-end '>
    //         <div className='menu'>
    //         <i className=' menu-bars fa fa-bars'></i>
    //         </div>
    //     </header>
    //     <div className='menu-container'>
    //         <Link>Home</Link>
    //         <Link>Browse All</Link>
    //         <Link>About</Link>
    //     </div>
    //     Animated Menu
    // </div>
    <div className="container-fluid animate-nav-container ">
        <div className=' navbar-row row text-end p-3'>
        <div>
            <i className=' menu-bars fa fa-bars'></i>
        </div>
        </div>
        <div className='col-12 vh-75 '>
        <div className=' row w-100 menu-container text-center'>
          
        <div><Link to="/">Home</Link></div>
        <div><Link to="/results/all">Browse All</Link></div>
        <div><Link to="/about">About</Link></div>
    
        </div>
        </div>
    
    </div>
  )
}

export default AnimatedNav