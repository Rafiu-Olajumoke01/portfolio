import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Jasper from "./../images/jasper port.png"
import "./about.css"


function About() {
  return (
    <div className=''>
      <Navbar />
      <div className="container justify-content-center text-align-center mt-5">
        <div className="row">
          <div className="col-md-6 about-img">
            <img src={Jasper} alt="" />
    
          </div>

          <div className="col-md-6 about-text mt-5">
            <h2 className='mt-5 fw-bold display-6'>I am a Frontend<span className='fw-bold'> Developer</span></h2>
            <div class="exp-area">
              <p class="exp">
                Experience:
                <span>
                  2years
                </span>
              </p>

              <p class="exp">
                Specialty:
                <span>
                  Frontend Development
                </span>
              </p>

              <p class="exp">
                Address:
                <span>
                  Lagos State, Nigeria
                </span>
              </p>

              <p class="exp">
                Email:
                <span>
                  rafiuolajumoke7@gmail.com
                </span>
              </p>

              <p class="exp">
                phone:
                <span>
                  08083790474
                </span>
              </p>

              <Link to="/project" className="btn">View All Projects</Link>
             
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default About