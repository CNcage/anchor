// key imports
import React, { Component } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { logoutUser } from "../../actions/authActions"
import { connect } from "react-redux"

// css
import './Records.css'

// components
import Navbar from '../layout/Navbar'
import Cards from './Cards'
import swipe from './drag.gif'

class Records extends Component {
  state = {
    userID: this.props.auth.user.id,
    diaries: []
  }

  async componentDidMount() {
    const response = await fetch('/api/users/records',{
          method : "post",
          body : JSON.stringify({_id: this.state.userID}),
          headers:{
              'Content-Type' : 'application/json'
          }
      }).then(res=>{
          if(res.status !== 401){
              return res.json().then(data => data);
          }
          else
              return {message : {msgBody : "Error!"},msgError : true};
      });
      this.setState({
        diaries: response.diaries.map((diary) => {
          const objects = [];
          for (const entry of diary) {
              objects.push({
              date: `${entry.date}`,
              time: `${entry.time}`,
              entry: entry.diary
              })
          }
          return objects;
        
        })
      })
  }

  render() {
    let allRecords = this.state.diaries.map((record, index) => {
      if (record.length !== 0) {
        return <Cards key={index} date={record[0].date} time={record[0].time} entry={record[0].entry}/>
      }
    })
    return (
      <div id="noTouchy">
        <Navbar />
        <div className="container">
            <h2 id="title">How are you doing?</h2>
            <p id="subtitle">Here are the DocBot's records...</p>
            <br></br>
            <ScrollContainer className="swipeContainer">
              <div id="recordsBox">{allRecords}</div>
              <div id="swipeTag">
                <img src={swipe} id="swipu" alt="swipe anim" />
              </div>
            </ScrollContainer>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(Records)