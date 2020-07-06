import React from 'react';
import DiaryLog from './DiaryLog';
import './Diary.css';
import todIcon from '../../img/icons/icon_Morning.png';

const Diary = ({ diary, userName, time, date }) => {

    let diaryLogs = diary.map((diary, index) => {
        return <DiaryLog
            key={index}
            question={diary.question}
            answer={diary.answer}
        />
    })

    return (
        <div id="diaryParent">
            <div id="diaryTop">
                <div id="diaryName">{userName}'s Diary </div>
                <div id="currentDate">{date}</div>
            </div>
            <div className="newHeader">
                <div className="diaryTitle">{time}</div>
                <div><img className="todIcon" src={todIcon} alt="morning"></img></div>
            </div>
            <div className="report">
                {diaryLogs}
            </div>
        </div>
    )

};

export default Diary;