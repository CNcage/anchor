import React from 'react';
import '../diary/Diary.css'
import todIcon from '../../img/icons/icon_Morning.png';

function Diary(props) {
    return (
        <div>
            <div id="diaryParent">
                <div id="diaryTop">
                    <div id="diaryName">{props.userName}'s Diary</div>
                    <div id="currentDate">{props.dateNow}</div>
                </div>
                <div className="newHeader">
                    <div className="diaryTitle">{props.timeofDay}:</div>
                    <div><img className="todIcon" src={todIcon} alt="morning"></img></div>
                </div>
                <div className="report">
                    <p>{props.mornFeels}</p>
                    <p>{props.mornTemp}</p>
                    <p>{props.breathless}</p>
                    <p>{props.tasteSmell}</p>
                    <p>{props.cough}</p>
                </div>
            </div>
        </div>
    )
}


export default Diary;