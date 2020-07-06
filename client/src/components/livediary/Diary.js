import React from 'react';
import './Diary.css';
import todIcon from '../../img/icons/icon_Morning.png';
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"

class Diary extends React.Component {

    //state, created during log to turn into a push request at the end

    render() {
        const jsonifyDiary = JSON.stringify(this.props.diary);
        const { user } = this.props.auth

        return (
            <div>
                <form method="POST" action="/livediary">
                    <input id="email" name="email" type="hidden" value={user.email} />
                    <input id="diary" name="diary" type="hidden" value={jsonifyDiary} />
                    <input id="date" name="date" type="hidden" value={this.props.date} />
                    <input id="time" name="time" type="hidden" value={this.props.time} />
                    <input type="submit" value="Save" />
                </form>

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