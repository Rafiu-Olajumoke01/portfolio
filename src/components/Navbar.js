import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { LiaJenkins } from 'react-icons/lia'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand me-auto mt-3"><h3>Dev. Olanife<span className='dot'>.</span></h3></a>

          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">FoodAndFaraway</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 fw-bold">
                <li className="nav-item">
                  <Link className="nav-link  mx-lg-2" aria-current="page" to="/">HOME</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/about">ABOUT</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/project">PROJECT</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/contact">CONTACT</Link>
                </li>               
                <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/expertise">EXPERTISE</Link>
                </li>               

              </ul>
              <Link to='/contact' className='subscribe_btn'>MESSAGE ME</Link>
            </div>
          </div>


          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar