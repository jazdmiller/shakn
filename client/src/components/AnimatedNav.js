import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AnimatedNav() {
  return (
    <div className="container animate-nav-container ">
        <div>
            <i className='fa fa-bars'></i>
        </div>
        <div className='container d-flex'>
        <Link to="/">Home</Link>
        <Link  to="/results/all">Browse All</Link>
        <Link  to="/about">About</Link>
        </div>
    </div>
  )
}

export default AnimatedNav