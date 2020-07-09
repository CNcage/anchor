// key imports
import React, { Component } from "react"
import ScrollContainer from "react-indiana-drag-scroll"
import { logoutUser } from "../../actions/authActions"
import { connect } from "react-redux"

// css
import "./Records.css"

// components
import Navbar from "../layout/Navbar"
import Cards from "./Cards"
import swipe from "./drag.gif"

import { FaRegLaughBeam } from "react-icons/fa"
import { FaRegSmile } from "react-icons/fa"
import { FaRegMeh } from "react-icons/fa"
import { FaRegSadTear } from "react-icons/fa"

class Records extends Component {
    state = {
        userID: this.props.auth.user.id,
        diaries: [],
        records: [
            {
                date: "13/05/2020",
                day: "Wednesday",
                emote: <FaRegMeh />,
                average: "awful",
                timeAM: "06:25am",
                timePM: "13:02pm",
                timeEV: "18:21pm",
                symptom1: "I felt awful",
                symptom2: "My temp was over 37.8°C",
                symptom3: "I had a continuous cough",
            },
            {
                date: "14/05/2020",
                day: "Thursday",
                emote: <FaRegMeh />,
                average: "awful",
                timeAM: "10:29am",
                timePM: "16:50pm",
                timeEV: "20:05pm",
                symptom1: "I felt awful",
                symptom2: "My temp was over 37.8°C",
                symptom3: "I had a continuous cough",
                symptom4: "My sense of smell / taste was affected",
            },
            // more here if needed
        ],
    }

    async componentDidMount() {
        const response = await fetch("/api/users/records", {
            method: "post",
            body: JSON.stringify({ _id: this.state.userID }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.status !== 401) {
                return res.json().then((data) => data)
            } else return { message: { msgBody: "Error!" }, msgError: true }
        })
        this.setState({
            diaries: response,
        })
    }

    render() {
        const testing = this.state.diaries.diaries

        console.log(testing)

        // let allRecords = this.state.records.map((record, index) => {
        //     return (
        //         <Cards
        //             key={index}
        //             date={record.date}
        //             day={record.day}
        //             emote={record.emote}
        //             average={record.average}
        //             timeAM={record.timeAM}
        //             timePM={record.timePM}
        //             timeEV={record.timeEV}
        //             symptom1={record.symptom1}
        //             symptom2={record.symptom2}
        //             symptom3={record.symptom3}
        //             symptom4={record.symptom4}
        //         />
        //     )
        // })
        return (
            <div id="noTouchy">
                <Navbar />
                <div className="container">
                    <h2 id="title">How are you doing?</h2>
                    <p id="subtitle">Here are the DocBot's records...</p>
                    <br></br>
                    <ScrollContainer className="swipeContainer">
                        {/* <div id="recordsBox">{allRecords}</div> */}
                        <div id="swipeTag">
                            <img src={swipe} id="swipu" alt="swipe anim" />
                        </div>
                    </ScrollContainer>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(Records)
