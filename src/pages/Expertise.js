import React from 'react'
import "./expertise.css"
import Navbar from '../components/Navbar'

function Expertise() {
    return (
        <div>
            <Navbar />

            <h2 className='services_h2 fw-bold'>My <span>Services</span></h2>

            <div className="container frontend">
                <div className="row">
                    <div className="col">
                        <p class="exp">
                            Design Implementation:
                            <span>
                                Turning design concepts into functional web pages using HTML, CSS, and Javascript
                            </span>
                        </p>

                        <p class="exp">
                            User Interface Development:
                            <span>
                                Creating responsive, interactive, and user-friendly interface
                            </span>
                        </p>

                        <p class="exp">
                            Browser Compatibility:
                            <span>
                               Ensuring compatibility across various browsers, devices, and screen sizes
                            </span>
                        </p>

                        <p class="exp">
                            Collaboration:
                            <span>
                                Working with designers, backend developers, and project managers to ensure seamless integration
                            </span>
                        </p>

                        <p class="exp">
                            Debugging & Testing:
                            <span>
                                Identifying and fixing bugs, testing for usability and functionality
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise