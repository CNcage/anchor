import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import "./Records.css"
import todIcon from "../../img/icons/icon_Morning.png"
import Navbar from "../layout/Navbar"

const Records = () => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <div>
            <Navbar />
            <div>
                <h1>Thissworkds LD </h1>
            </div>
            <div className="recordwrapper">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <div id="front">
                        <h1>How am I doing?</h1>
                        <p>date</p>
                        <br />
                        <p>smiley faces</p>
                        <br />
                        <p>On average, today I have felt ---</p>
                        <br />
                        <button onClick={handleClick}>Details</button>
                    </div>

                    <div id="back">
                        <h1>Daily Summary</h1>
                        <p>date</p>
                        <img
                            className="todIcon"
                            src={todIcon}
                            alt="morning"
                        ></img>
                        <p>symptoms</p>
                        <br />
                        <img
                            className="todIcon"
                            src={todIcon}
                            alt="morning"
                        ></img>
                        <p>symptoms</p>
                        <br />
                        <img
                            className="todIcon"
                            src={todIcon}
                            alt="morning"
                        ></img>
                        <p>symptoms</p>
                        <br />
                        <button onClick={handleClick}>Back</button>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <div id="front">
                        <h1>How am I doing?</h1>
                        <p>date</p>
                        <br />
                        <p>smiley faces</p>
                        <br />
                        <p>On average, today I have felt ---</p>
                        <br />
                        <button onClick={handleClick}>Details</button>
                    </div>

                    <div id="back">
                        <h1>Daily Summary</h1>
                        <p>date</p>
                        <img
                            className="todIcon"
                            src={todIcon}
                            alt="morning"
                        ></img>
                        <p>symptoms</p>
                        <br />
                        <img
                            className="todIcon"
                            src={todIcon}
                            alt="morning"
                        ></img>
                        <p>symptoms</p>
                        <br />
                        <img
                            className="todIcon"
                            src={todIcon}
                            alt="morning"
                        ></img>
                        <p>symptoms</p>
                        <br />
                        <button onClick={handleClick}>Back</button>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <div id="front">
                        <h1>How am I doing?</h1>
                        <p>date</p>
                        <br />
                        <p>smiley faces</p>
                        <br />
                        <p>On average, today I have felt ---</p>
                        <br />
                        <button onClick={handleClick}>Details</button>
                    </div>

                    <div id="back">
                        <h1>Daily Summary</h1>
                        <p>date</p>
                        <img
                            className="todIcon"
                            src={todIcon}
                            alt="morning"
                        ></img>
                        <p>symptoms</p>
                        <br />
                        <img
                            className="todIcon"
                            src={todIcon}
                            alt="morning"
                        ></img>
                        <p>symptoms</p>
                        <br />
                        <img
                            className="todIcon"
                            src={todIcon}
                            alt="morning"
                        ></img>
                        <p>symptoms</p>
                        <br />
                        <button onClick={handleClick}>Back</button>
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    )
}

export default Records

// import React from "react"
// import todIcon from "../../img/icons/icon_Morning.png"
// import PropTypes from "prop-types"
// import { connect } from "react-redux"
// import { logoutUser } from "../../actions/authActions"
// import CardFlip from "./CardFlip"

// class Diary extends React.Component {
//     //state, created during log to turn into a push request at the end

//     render() {
//         const jsonifyDiary = JSON.stringify(this.state.diary)
//         console.log(jsonifyDiary)

//         return (
//             <div id="diaryParent">
//                 <div id="diaryCard">
//                     <CardFlip />
//                 </div>
//                 <div id="diaryTop">
//                     <div id="diaryName">Aaa's Diary </div>
//                     <div id="currentDate">123123</div>
//                 </div>
//                 <div className="newHeader">
//                     <div className="diaryTitle">late</div>
//                     <div>
//                         <img
//                             className="todIcon"
//                             src={todIcon}
//                             alt="morning"
//                         ></img>
//                     </div>
//                 </div>
//                 <div className="report">2</div>
//             </div>
//         )
//     }
// }

// Diary.propTypes = {
//     logoutUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
// }

// const mapStateToProps = (state) => ({
//     auth: state.auth,
// })

// export default connect(mapStateToProps, { logoutUser })(Diary)}
