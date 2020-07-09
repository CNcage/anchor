// key-imports
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

// css
import './Cards.css'

// assets
import { WiSunrise } from 'react-icons/wi'
import { WiDaySunny } from 'react-icons/wi'
import { FiMoon } from 'react-icons/fi'
import { GoCalendar } from 'react-icons/go'

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
                        <h1>{props.day}</h1>
                        <div id="date-front"><GoCalendar /><span>&nbsp;</span>{props.date}</div>
                        <div id="feeling">
                            <div id="emote">{props.emote}</div>
                        </div>
                        <div id="averageText">
                            <p>On average, on this day I most commonly felt:<h3>{props.average}</h3></p>
                        </div>
                        <div id="tap">
                            <p>tap this card for more details</p>
                        </div>
                    </div>
                


                    <div id="cardBack" onClick={handleClick} className="pBContainer">
                        {/* BACK */}
                        <h1>Daily Log</h1>
                        <div id="date-back"><GoCalendar /><span>&nbsp;</span>{props.date}</div>
                        <div id="logs">
                            <div id="morning">
                                <div id="times">
                                    <p id="dayIcon"><WiSunrise /></p>
                                    <p id="time">{props.timeAM}</p>
                                </div>
                                <div id="symptoms">
                                    <p>{props.symptom1}</p>
                                    <p>{props.symptom2}</p>
                                    <p>{props.symptom3}</p>
                                    <p>{props.symptom4}</p>
                                </div>
                            </div>
                            <div id="afternoon">
                                <div id="times">
                                    <p id="dayIcon"><WiDaySunny /></p>
                                    <p id="time">{props.timePM}</p>
                                </div>
                                <div id="symptoms">
                                    <p>{props.symptom1}</p>
                                    <p>{props.symptom2}</p>
                                    <p>{props.symptom3}</p>
                                    <p>{props.symptom4}</p>
                                </div>
                            </div>
                            <div id="evening">
                                <div id="times">
                                    <p id="nightIcon"><FiMoon /></p>
                                    <p id="time">{props.timeAM}</p>
                                </div>
                                <div id="symptoms">
                                    <p>{props.symptom1}</p>
                                    <p>{props.symptom2}</p>
                                    <p>{props.symptom3}</p>
                                    <p>{props.symptom4}</p>
                                </div>
                            </div>
                        </div>
                            <div id="tap">
                                <p>tap to return to summary</p>
                            </div>
                    </div>
                </ReactCardFlip>
            </div>
        );
    }


export default Records