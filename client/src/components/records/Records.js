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

import { FaRegLaughBeam } from 'react-icons/fa'
import { FaRegSmile } from 'react-icons/fa'
import { FaRegMeh } from 'react-icons/fa'
import { FaRegSadTear } from 'react-icons/fa'


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
        symptom3: "I had a continuous cough"
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
        symptom4: "My sense of smell / taste was affected"
      },
        // more here if needed
    ]
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

// // key imports
// import React, { Component } from 'react'
// import ScrollContainer from 'react-indiana-drag-scroll'
// import { logoutUser } from "../../actions/authActions"
// import { connect } from "react-redux"

// // css
// import './Records.css'

// // components
// import Navbar from '../layout/Navbar'
// import Cards from './Cards'
// import swipe from './drag.gif'

// import { FaRegLaughBeam } from 'react-icons/fa'
// import { FaRegSmile } from 'react-icons/fa'
// import { FaRegMeh } from 'react-icons/fa'
// import { FaRegSadTear } from 'react-icons/fa'


// class Records extends Component {
//   state = {
//     userID: this.props.auth.user.id,
//     firstArray: "",
//     diaries: [],
//     records: [
//      {
//         date: "13/05/2020",
//         day: "Wednesday",
//         emote: <FaRegMeh />,
//         average: "awful",
//         timeAM: "06:25am",
//         timePM: "13:02pm",
//         timeEV: "18:21pm",
//         symptom1: "I felt awful",
//         symptom2: "My temp was over 37.8°C",
//         symptom3: "I had a continuous cough"
//       },
//       {
//         date: "14/05/2020",
//         day: "Thursday",
//         emote: <FaRegMeh />,
//         average: "awful",
//         timeAM: "10:29am",
//         timePM: "16:50pm",
//         timeEV: "20:05pm",
//         symptom1: "I felt awful",
//         symptom2: "My temp was over 37.8°C",
//         symptom3: "I had a continuous cough",
//         symptom4: "My sense of smell / taste was affected"
//       },
//         // more here if needed
//     ]
//   }
  

//   async componentDidMount() {
//     console.log("component mounted")
//     const response = await fetch('/api/users/records',{
//           method : "post",
//           body : JSON.stringify({_id: this.state.userID}),
//           headers:{
//               'Content-Type' : 'application/json'
//           }
//       }).then(res=>{
//           if(res.status !== 401){
//             console.log("stuff")
//               return res.json().then(data => data);
              
//           }
//           else
//               return {message : {msgBody : "Error!"},msgError : true};
//       });
//       this.setState({
//         diaries: response
//       })
//   }

//   async componentDidUpdate() {
//     console.log("component updated");
//     firstArray.setState(this.state.diaries.diaries[0][0])
//     let allRecords = this.state.diaries.diaries[0][0].map((diary, index) => {
//       return <Cards key={index} date={diary.date} />
//     })
//   }

// //   firstArray = (update) => {
// //     this.setState({
// //       this.state.diaries.diaries[0][0]
// //         diary: ([
// //             {
// //                 question: "How Are You Feeling?",
// //                 answer: update,
// //             },
// //         ]),
// //     })
// // }

// //fimd a way to wait / load untill all data comes in before displaying this.state.diaries.diaries[0][0] as gotLog :D

//   render() {
    
//     return (
//       <div id="noTouchy">
//         <Navbar />
//         <div className="container">
//             <h2 id="title">How are you doing?</h2>
//             <p id="subtitle">Here are the DocBot's records...</p>
//             <br></br>
//             <ScrollContainer className="swipeContainer">
//               <div id="recordsBox">{allRecords}</div>
//               <div id="swipeTag">
//                 <img src={swipe} id="swipu" alt="swipe anim" />
//               </div>
//             </ScrollContainer>
//           </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// })

// export default connect(mapStateToProps, { logoutUser })(Records)