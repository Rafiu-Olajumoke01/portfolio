import React from 'react'
import { Link } from 'react-router-dom'
import "./project.css"
import Navbar from "./../components/Navbar"

function Project() {
  return (
    <div>
      <Navbar/>
      <div id='hero-slider' className='carousel slide'>
        <div className="carousel-inner">

          <div className="carousel-item text-center bg-cover vh-100 active slide-1">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center">

              </div>
            </div>
          </div>

          <div className="carousel-item text-center bg-cover vh-100 slide-2">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center">

              </div>
            </div>

          </div>

          <div className="carousel-item text-center bg-cover vh-100 slide-3">
            <div className="container h-100 d-flex align-items-center justify-content-center">
              <div className="row justify-content-center">

              </div>
            </div>

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#hero-slider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#hero-slider" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>

    </div>
  )
}

export default Project