// key-imports
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

// css
import './Cards.css'

// assets
import { FaRegLaughBeam } from 'react-icons/fa'
import { FaRegSmile } from 'react-icons/fa'
import { FaRegMeh } from 'react-icons/fa'
import { FaRegSadTear } from 'react-icons/fa'
import { WiSunrise } from 'react-icons/wi'
import { WiDaySunny } from 'react-icons/wi'
import { FiMoon } from 'react-icons/fi'

// -------------------------------------------------------------------

const Records = (props) => {
const [isFlipped, setIsFlipped] = useState(false);

const handleClick = () => {
    setIsFlipped(!isFlipped)
}
        return (
            <div className="cards">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    
                    <div id="cardFront" onClick={handleClick}>
                        {/* FRONT */}
                        <div id="date-front">{props.date}</div>
                        <div id="feeling">
                            <div id="awesome">
                                <p id="emote"><FaRegLaughBeam /></p>
                            </div>
                            <div id="okay">
                                <p id="emote"><FaRegSmile /></p>
                            </div>
                            <div id="meh">
                                <p id="emote"><FaRegMeh /></p>
                            </div>
                            <div id="dying">
                                <p id="emote"><FaRegSadTear /></p>
                            </div>
                        </div>
                        <div id="averageText">
                            <p>On average, during this day<br />I felt {props.average}</p>
                        </div>
                        <div id="tap">
                            <p>tap this card for more details</p>
                        </div>
                    </div>
                    
                    <div id="cardBack" onClick={handleClick} className="pBContainer">
                        {/* BACK */}
                        <h1>Daily Summary</h1>
                        <div id="date-back">{props.date}
                            <div id="morning">
                                <div id="icon1">
                                    <p id="sunrise"><WiSunrise /></p>
                                    <p>{props.time}</p>
                                </div>
                            </div>
                            <div id="afternoon">
                                <div id="icon2">
                                    <p id="midday"><WiDaySunny /></p>
                                    <p>{props.time}</p>
                                </div>
                            </div>
                            <div id="evening">
                                <div id="icon3">
                                    <p id="midday"><FiMoon /></p>
                                    <p>{props.time}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactCardFlip>
            </div>
        );
    }


export default Records