import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../img/icons/anchorFinal.png"
import "./Landing.css"
import { FcAddDatabase } from "react-icons/fc"
import { FcApproval } from "react-icons/fc"
import { FcGlobe } from "react-icons/fc"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Landing = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div>
            <div className="hero-image1">
                <div class="animate__animated animate__fadeIn animate__delay-100ms">
                    <div className="hero-text1">
                        <img src={Logo} alt="mainlogo"></img>
                        <h1>Welcome!</h1>
                        <p>
                            Dr. Bot here to help you track sypmtoms and help
                            explain some early indications that you may have
                            Covid-19
                        </p>
                        <div className="hero-button1">
                            <Link to="/register">
                                <button id="registerbtn">Register</button>
                            </Link>
                            <Link to="/login">
                                <button id="loginbtn">Log In</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenth1">
                <h2>WHAT WE DO</h2>
                <p>
                    Anchor Health is a diary app to help you track Covid-19
                    sypmtoms
                </p>
            </div>
            <div className="icons">
                <div className="icon1" data-aos="fade-up">
                    <FcAddDatabase size={"75px"} />
                    <h3>Daily Journal</h3>
                    <p>Log your sypmtoms on a daily basis.</p>
                </div>
                <div className="icon1" data-aos="fade-up">
                    <FcApproval size={"75px"} />
                    <h3>24/7 DocBot</h3>
                    <p>DocBot is here for you 24/7.</p>
                </div>
                <div className="icon1" data-aos="fade-up">
                    <FcGlobe size={"75px"} />
                    <h3>Worldwide</h3>
                    <p>Available anytime, anywhere.</p>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div class="footer1">
                <h5>
                    This is a project from a coding bootcamp and has no real
                    health value
                </h5>
                <h2>
                    Anchor Health is a coding bootcamp project and has no real
                    life health use
                </h2>
            </div>
        </div>
    )
}

export default Landing
