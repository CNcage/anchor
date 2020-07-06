import React from 'react';
import DiaryLog from './DiaryLog';
import './Diary.css';
import todIcon from '../../img/icons/icon_Morning.png';
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"

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
            <div>
                <form method="POST" action="/diary">
                    <input id="email" name="email" type="hidden" value={user.email} />
                    <input id="diary" name="diary" type="hidden" value={jsonifyDiary} />
                    <input id="date" name="date" type="hidden" value={this.state.date} />
                    <input id="time" name="time" type="hidden" value={this.state.time} />
                    <input type="submit" value="Save" />
                </form>

                <div id="diaryParent">
                    <div id="diaryTop">
                        <div id="diaryName">{user.name}'s Diary </div>
                        <div id="currentDate">{this.state.date}</div>
                    </div>
                    <div className="newHeader">
                        <div className="diaryTitle">{this.state.time}</div>
                        <div><img className="todIcon" src={todIcon} alt="morning"></img></div>
                    </div>
                    <div className="report">
                        {this.state.diaryLogs}
                    </div>
                </div>
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