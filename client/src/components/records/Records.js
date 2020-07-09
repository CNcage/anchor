// key imports
import React, { Component } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

// css
import './Records.css'

// components
import Navbar from '../layout/Navbar'
import Cards from './Cards'

class Records extends Component {
  state = {
    records: [
      {
        date: "test-date",
        average: "test-average",
        time: "test-time",
        // symptoms
      },
      {
        date: "test-date",
        average: "test-average",
        time: "test-time",
        // symptoms
      },
      {
        date: "test-date",
        average: "test-average",
        time: "test-time",
        // symptoms
      },
      {
        date: "test-date",
        average: "test-average",
        time: "test-time",
        // symptoms
      },
        // more here if needed
    ]
  }

  render() {
    let allRecords = this.state.records.map((record, index) => {
      return <Cards key={index} date={record.date} average={record.average} time={record.time} />
    })
    return (
      <div id="noTouchy">
        <Navbar />
        {/* ^^ nav, don't touch! */}
        <div className="cardContainer">
            <h2 id="title">How are you doing?</h2>
            <p id="subtitle">Here are the DocBot's reports...</p>
            <br></br>
            <ScrollContainer className="swipeContainer">
              <div id="recordsBox">{allRecords}</div>
            </ScrollContainer>
            <div id="aboutRecords"> &lt; drag to view more &gt;</div>
          </div>
        </div>
    );
  }
}

export default Records;