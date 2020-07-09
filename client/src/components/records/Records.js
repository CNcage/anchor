// key imports
import React, { Component } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

// css
import './Records.css'

// components
import Navbar from '../layout/Navbar'
import Cards from './Cards'
import swipe from './drag.gif'

class Records extends Component {
  state = {
    records: [
     {
        date: "13/05/2020",
        day: "Wednesday",
        average: "awful.",
        timeAM: "06:25am",
        timePM: "13:02pm",
        timeEV: "18:21pm",
        symptom1: "I felt awful",
        symptom2: "My temp was over 37.8°C",
        symptom3: "I had a continuous cough"
      },
      {
        date: "14/05/2020",
        day: "Thursday",
        average: "awful.",
        timeAM: "06:25am",
        timePM: "13:02pm",
        timeEV: "18:21pm",
        symptom1: "I felt awful",
        symptom2: "My temp was over 37.8°C",
        symptom3: "I had a continuous cough"
      },
        // more here if needed
    ]
  }

  render() {
    let allRecords = this.state.records.map((record, index) => {
      return <Cards key={index} date={record.date} average={record.average} timeAM={record.timeAM} timePM={record.timePM} timeEV={record.timeEV} symptom1={record.symptom1} symptom2={record.symptom2} symptom3={record.symptom3} />
    })
    return (
      <div id="noTouchy">
        <Navbar />
        <div className="container">
            <h2 id="title">How are you doing?</h2>
            <p id="subtitle">Here are the DocBot's reports...</p>
            <br></br>
            <ScrollContainer className="swipeContainer">
              <div id="recordsBox">{allRecords}</div>
              <div id="swipeTag">
                <img src={swipe} id="swipu" alt="Logo" />
              </div>
            </ScrollContainer>
          </div>
      </div>
    );
  }
}

export default Records;