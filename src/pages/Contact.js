import React from 'react'
import Navbar from '../components/Navbar'
import "./contact.css"
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <div>
      <Navbar />
      <h3 className='mt-5 reach fw-bold display-5'>DROP <span className=''>YOUR</span> MESSAGE</h3>
      <div className="form">
        <form action="">
          <div className="frm-inp">

            <div className="inp-ctrl">
              <label for="">Full name</label>
              <input type="text" />
            </div>

            <div className="inp-ctrl">
              <label for="">Email</label>
              <input type="email" />
            </div>

            <div className="inp-ctrl">
              <label for="">Type your message:</label>
              <textarea name="" id=""></textarea>
            </div>
          </div>
          <div>
            {/* <Link to="mailto:rafiuolajumoke7@gmail.com" className='btn'>Send Message</Link> */}
            <Link to="https://wa.me/08083790474" className='btn '>Send Message</Link>
          </div>

        </form>

      </div>
    </div>
  )
}

export default Contact