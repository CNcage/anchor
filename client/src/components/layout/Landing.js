import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../img/icons/anchorFinal.png"
import "./Landing.css"
import { FcAddDatabase } from "react-icons/fc"
import { FcAssistant } from "react-icons/fc"
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
            <div className="hero-image">
                <div class="animate__animated animate__fadeIn animate__delay-100ms">
                    <div className="hero-text">
                        <img src={Logo} alt="mainlogo"></img>
                        <h1>Anchor Health</h1>
                        <p>
                            Dr. Bot here to help you track sypmtoms and help
                            explain some early indications that you may have
                            Covid-19
                        </p>
                        <div className="hero-button">
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
            <div className="divider">
                <div className="divbox">
                    <div className="dividerImg">
                        <div data-aos="fade-up">
                            <FcAddDatabase size="100px" />
                            <h2>Diary</h2>
                            <p>
                                Tem q testar isso aqui this is very crazy omg
                                this is cool
                            </p>
                        </div>
                    </div>
                    <div className="dividerImg">
                        <div data-aos="fade-up">
                            <FcAssistant size="100px" />
                            <h2>DocBot</h2>
                            <p>text</p>
                        </div>
                    </div>
                    <div className="dividerImg">
                        <div data-aos="fade-up">
                            <FcGlobe size="100px" />
                            <h2>Anytime</h2>
                            <p>text</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
