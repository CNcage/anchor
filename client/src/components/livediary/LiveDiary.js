import React from "react"
import DocBot from "./DocBot"
import Diary from "./Diary"
import DiaryLog from "./DiaryLog"
import Navbar from "../layout/Navbar"
import PropTypes from "prop-types"
import "./LiveDiary.css"
import { connect } from "react-redux"
import { logoutUser, logDiary } from "../../actions/authActions"

class LiveDiary extends React.Component {
    state = {
        date: this.set_date(), // specific to the day it was written
        time: this.set_time(), // the single specific entry
        diary: [], // every diary question and answer for that session
        userID: this.props.auth.user.id
    }

    set_date() {
        let newDate = new Date()
        let date = newDate.getDate()
        let month = newDate.getMonth() + 1
        let year = newDate.getFullYear()
        return `${date}/${month}/${year}`
    }

    set_time() {
        const
            takeTwelve = n => n > 12 ? n - 12 : n,
            addZero = n => n < 10 ? "0" + n : n;
        let d, h, m, amPm, time;
        d = new Date();
        h = addZero(takeTwelve(d.getHours()));
        m = addZero(d.getMinutes());
        amPm = d.getHours() >= 12 ? "pm" : "am";
        time = `${h}:${m}${amPm}`
        return `${time}`
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            })
        }
    }

    submitLog = () => {
        const newEntry = {
            _id: this.state.userID,
            newDiary: {
                date: this.state.date,
                time: this.state.time,
                diary: this.state.diary
            }
        };

        this.props.logDiary(newEntry, this.props.history)
    }



    //functions to set the states
    set_feeling = (update) => {
        this.setState({
            diary: this.state.diary.concat([
                {
                    question: "How Are You Feeling?",
                    answer: update,
                },
            ]),
        })
    }

    //alternate way to write same functions

    set_temp = (update) => {
        var newLog = this.state.diary.concat({
            question: "What was your temp?",
            answer: update,
        })
        this.setState({ diary: newLog })
    }

    set_cough = (update) => {
        var newLog = this.state.diary.concat({
            question: "Continuous Cough?",
            answer: update,
        })
        this.setState({ diary: newLog })
    }

    set_tasteSmell = (update) => {
        var newLog = this.state.diary.concat({
            question: "Change in taste / smell?",
            answer: update,
        })
        this.setState({ diary: newLog })
    }

    set_breathless = (update) => {
        var newLog = this.state.diary.concat({
            question: "Breathless?",
            answer: update,
        })
        this.setState({ diary: newLog })
    }

    diaryLogs = this.state.diary.map((diary, index) => {
        return (
            <DiaryLog
                key={index}
                question={diary.question}
                answer={diary.answer}
            />
        )
    })
    render() {
        console.log(this.state)
        return (
            <div>
                <Navbar />
                <div className="diarywrapper">
                    <DocBot
                        set_feeling={this.set_feeling}
                        set_temp={this.set_temp}
                        set_cough={this.set_cough}
                        set_tasteSmell={this.set_tasteSmell}
                        set_date={this.set_date}
                        consoleLog={this.consoleLog}
                        set_breathless={this.set_breathless}
                        submitLog={this.submitLog}
                    />
                    <Diary
                        date={this.state.date}
                        time={this.state.time}
                        diary={this.state.diary}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

LiveDiary.propTypes = {
    logDiary: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, { logoutUser, logDiary })(LiveDiary)