import React from 'react';
import DiaryLog from './DiaryLog';
import './Diary.css';
import todIcon from '../../img/icons/icon_Morning.png';

import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"

import CardFlip from './CardFlip';


class Diary extends React.Component {

    //state, created during log to turn into a push request at the end
    state = {
        email: "", // unique to the user logged in
        date: this.set_date(), // specific to the day it was written
        time: "", // the single specific entry  
        diary: []  // every dirary question and answer for that session
    }

    set_date() {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        return `${date}/${month}/${year}`
    }

    //console logging current state contents
    submitLog = () => {
        console.log(this.state)
    }

    //functions to set the states
    set_feeling = (update) => {

        this.setState({
            diary: this.state.diary.concat(
                [{
                    question: "How Are You Feeling?",
                    answer: update
                }])
        })
    }

    //alternate way to write same functions

    set_temp = (update) => {
        var newLog = this.state.diary.concat(
            {
                question: "What was your temp?",
                answer: update
            });
        this.setState({ diary: newLog })
    }

    set_cough = (update) => {
        var newLog = this.state.diary.concat(
            {
                question: "Continuous Cough?",
                answer: update
            });
        this.setState({ diary: newLog })
    }

    set_tasteSmell = (update) => {
        var newLog = this.state.diary.concat(
            {
                question: "Change in taste / smell?",
                answer: update
            });
        this.setState({ diary: newLog })
    }

    set_breathless = (update) => {
        var newLog = this.state.diary.concat(
            {
                question: "Breathless?",
                answer: update
            });
        this.setState({ diary: newLog })
    }

    diaryLogs = this.state.diary.map((diary, index) => {
        return <DiaryLog
            key={index}
            question={diary.question}
            answer={diary.answer}
        />
    })
    render() {
        const jsonifyDiary = JSON.stringify(this.state.diary);
        console.log(jsonifyDiary)
        const { user } = this.props.auth

    return (
        <div id="diaryParent">
            <div id="diaryCard"><CardFlip /></div>
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
        )

    }
}


Diary.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(Diary)