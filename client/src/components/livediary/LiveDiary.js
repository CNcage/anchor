import React from "react"
import DocBot from "./DocBot"
import Diary from "./Diary"
import DiaryLog from "./DiaryLog"
import Navbar from "../layout/Navbar"
import "./LiveDiary.css"

class LiveDiary extends React.Component {
    state = {
        date: this.set_date(), // specific to the day it was written
        time: "", // the single specific entry
        diary: [], // every dirary question and answer for that session
    }

    set_date() {
        let newDate = new Date()
        let date = newDate.getDate()
        let month = newDate.getMonth() + 1
        let year = newDate.getFullYear()
        return `${date}/${month}/${year}`
    }

    //console logging current state contents
    submitLog = () => {
        console.log(this.state)
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

export default LiveDiary
