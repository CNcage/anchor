import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../img/icons/anchorFinal.png"
import "./Landing.css"
import { FcAddDatabase } from "react-icons/fc"
import { FcAssistant } from "react-icons/fc"
import { FcGlobe } from "react-icons/fc"
import { BsFillPersonFill } from "react-icons/bs"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Landing = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div style={{ height: "80vh" }}>
            <div className="landingnav">
                <div className="landingnavLogo">
                    <img alt="logo" className="logo" src={Logo}></img>
                    <p>ANCHOR HEALTH</p>
                </div>

                <div className="navLogout">
                    <button className="loginbtn">
                        <BsFillPersonFill size="15px" />
                        Login
                    </button>
                </div>
            </div>
            <div className="hero-image">
                <div className="hero-text">
                    <h1 class="animate__animated animate__fadeIn animate__delay-1s">
                        Anchor Health
                    </h1>
                    <p class="animate__animated animate__fadeIn animate__delay-2s">
                        Dr. Bot here to help you track sypmtoms and help explain
                        some early indications that you may have Covid-19
                    </p>
                    <div className="hero-button">
                        <Link to="/register">
                            <button id="registerbtn">Register</button>
                        </Link>
                        <Link to="/login">
                            <button id="login">Log In</button>
                        </Link>
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            {/* <div class="container">
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <img src="https://cdn.iconscout.com/icon/free/png-512/diary-1574994-1331332.png"></img>
                            <h3>Diary</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quas cum cumque minus iste
                                veritatis provident at.
                            </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <img src="https://icon2.cleanpng.com/20180409/skw/kisspng-robotics-technology-computer-icons-internet-bot-robotics-5acb92ea218e54.0380469115232908581375.jpg"></img>
                            <h3>DocBot!</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quas cum cumque minus iste
                                veritatis provident at.
                            </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"></img>
                            <h3>Launch</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quas cum cumque minus iste
                                veritatis provident at.
                            </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Landing
