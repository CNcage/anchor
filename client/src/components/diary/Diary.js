import React from "react"
import todIcon from "../../img/icons/icon_Morning.png"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"
import CardFlip from "./CardFlip"

class Diary extends React.Component {
    //state, created during log to turn into a push request at the end

    render() {
        const jsonifyDiary = JSON.stringify(this.state.diary)
        console.log(jsonifyDiary)

        return (
            <div id="diaryParent">
                <div id="diaryCard">
                    <CardFlip />
                </div>
                <div id="diaryTop">
                    <div id="diaryName">Aaa's Diary </div>
                    <div id="currentDate">123123</div>
                </div>
                <div className="newHeader">
                    <div className="diaryTitle">late</div>
                    <div>
                        <img
                            className="todIcon"
                            src={todIcon}
                            alt="morning"
                        ></img>
                    </div>
                </div>
                <div className="report">2</div>
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
