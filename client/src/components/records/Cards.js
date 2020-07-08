// key-imports
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

// css
import './Cards.css'

// assets
import test from '../../img/1.png'


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
                        <div id="date">{props.date}</div>
                        <div id="averageFeeling">
                            <div id="1">
                                <img id="emote" src={test} alt="user pic" />
                            </div>
                            <div id="2">
                                <img id="emote" src={test} alt="user pic" />
                            </div>
                            <div id="3">
                                <img id="emote" src={test} alt="user pic" />
                            </div>
                            <div id="4">
                                <img id="emote" src={test} alt="user pic" />
                            </div>
                        </div>
                        <div id="averageText">
                            <p>On average, today I have felt {props.average}</p>
                        </div>
                        <div id="tap">
                            <p>tap this card for more details</p>
                        </div>
                    </div>
                    
                    <div id="cardBack" onClick={handleClick} className="pBContainer">
                        {/* BACK */}
                        <h1>Daily Summary</h1>
                        <div id="date">{props.date}
                            <div id="morning">
                                <div id="icon1">
                                    <img id="sunrise" src={test} alt="morning" />
                                    <p>{props.time}</p>
                                </div>
                            </div>
                            <div id="afternoon">
                                <div id="icon2">
                                    <img id="midday" src={test} alt="afternoon" />
                                    <p>{props.time}</p>
                                </div>
                            </div>
                            <div id="evening">
                                <div id="icon3">
                                    <img id="sunset" src={test} alt="evening" />
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