import React from 'react';
import './Diary.css';

const DiaryLog = ({ question, answer }) => {
    return (
        <div id="diaryLogs">
            <p>{answer}</p>
            <hr className="diaryLine"></hr>
        </div>
    )
}
export default DiaryLog