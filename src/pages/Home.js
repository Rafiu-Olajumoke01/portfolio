import React from 'react'
import Navbar from '../components/Navbar'
import script from "./../script"
import TypedText from '../components/TypedText'
import "./home.css"
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Home() {

  const strings = ['Hello', 'welcome to my Portfolio', 'I am a Frontend Developer', 'Reach out to me on', '08083790474.']
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="col mt-5">
            <h3 className=' mt-5 mb-5 hi'>Hi,</h3>
            <h1 className='mt-5 name display-2 fw-bold'>I'm <span>Rafiu Olajumoke</span></h1>
           <h5 className='mt-5 fw-bold'>
           <TypedText strings={strings} />
           </h5>
          

            <div className="social mt-5">
              <Link to="https://facebook.com"><FaFacebookF /></Link>
              <Link to="https://wa.me/08083790474"><FaWhatsapp /></Link>
              <Link to="mailto:rafiuolajumoke7@gmail.com"><FaEnvelope /></Link>
              <Link to="tel:08083790474"><FaPhoneAlt /></Link>
            </div>

            <div className="main-btn">
              <Link to="mailto:rafiuolajumoke7@gmail.com" className="btn">Hire me</Link>
              <Link to="CV.pdf" className="btn btn2">Download CV</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home