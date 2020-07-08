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
                        <div className="icons">
                            <FcAddDatabase size={"100px"} />
                            <FcApproval size={"100px"} />
                            <FcGlobe size={"100px"} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="divider">
                <div className="divbox">
                    <div className="leftsidediv">
                        <img src="https://images.pexels.com/photos/38870/pexels-photo-38870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Landing
