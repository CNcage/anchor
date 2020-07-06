import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './CardFlip.css';
import todIcon from '../../img/icons/icon_Morning.png';

const CardFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div id="front">
                <h1>How am I doing?</h1>
                <p>date</p>
                <br />
                <p>smiley faces</p>
                <br />
                <p>On average, today I have felt ---</p>
                <br />
                <button onClick={handleClick}>Details</button>
            </div>
    
            <div id="back">
                <h1>Daily Summary</h1>
                <p>date</p>
                <img className="todIcon" src={todIcon} alt="morning"></img>
                <p>symptoms</p>
                <br />
                <img className="todIcon" src={todIcon} alt="morning"></img>
                <p>symptoms</p>
                <br />
                <img className="todIcon" src={todIcon} alt="morning"></img>
                <p>symptoms</p>
                <br />
                <button onClick={handleClick}>Back</button>
            </div>
        </ReactCardFlip>
    )
}

export default CardFlip;