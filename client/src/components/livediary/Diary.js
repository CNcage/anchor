import React from 'react';
import './Diary.css';
import todIcon from '../../img/icons/icon_Morning.png';
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"

class Diary extends React.Component {

    //state, created during log to turn into a push request at the end

    render() {
        const { user } = this.props.auth

        return (
            <div id="diaryParent">
                <div id="diaryTop">
                    <div id="diaryName">{user.name}'s Diary </div>
                    <div id="currentDate">{this.props.date}</div>
                </div>
                <div className="newHeader">
                    <div className="diaryTitle">{this.props.time}</div>
                    <div><img className="todIcon" src={todIcon} alt="morning"></img></div>
                </div>
                <div className="report">
                    {this.props.diaryLogs}
                </div>
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