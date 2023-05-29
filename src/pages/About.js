import React from 'react'
import AboutImg from '../assets/about-img.png'

function About() {
  return (
    <div>
      <div className='container-fluid about-container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <img scr={AboutImg} alt="cheers drink graphic"/>
          </div>
          <div className='col-12 col-md-6'>
            Hello
          </div>
        </div>
      </div>
    </div>
  )
}

export default About