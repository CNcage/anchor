import React from 'react';
import './Diary.css';

const DiaryLog = ({ question, answer }) => {
    return (
        <div>
            <ul>
                <li>{answer}</li>
            </ul>
        </div>
    )
}
export default DiaryLog