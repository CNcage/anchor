import React from "react"
import DiaryLog from "./DiaryLog"
import "./Diary.css"
import todIcon from "../../img/icons/icon_Morning.png"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"

const Diary = (props) => {
    const { user } = props.auth

    let diaryLogs = props.diary.map((diary, index) => {
        return (
            <DiaryLog
                key={index}
                question={diary.question}
                answer={diary.answer}
            />
        )
    })

    return (
        <div id="diaryParent">
            <div id="diaryTop">
                <div id="diaryName">{user.name}'s Diary </div>
                <div id="currentDate">{props.date}</div>
            </div>
            <div className="newHeader">
                <div className="diaryTime">At {props.time}:</div>
                <div>
                    <img className="todIcon" src={todIcon} alt="morning"></img>
                </div>
            </div>
            <hr className="diaryLine"></hr>
            <div className="report">{diaryLogs}</div>
        </div>
    )
}

Diary.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(Diary)
